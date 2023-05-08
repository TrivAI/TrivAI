import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord";
import { OAuthConfig } from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db";

async function getUserRole(userId : string) {
  const user = await db.user.findFirst({
    where: { id: userId },
    select: { role: true },
  });
  return user?.role;
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },  
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            // Persist the OAuth access_token to the token right after signin
            // account is only passed once after a new user signs in
            if (account) {
                const { sub } = token; // sub is the user id in the database
                token.accessToken = account.access_token
                // getting role so only admins can hit admin API endpoints
                const userRole = await getUserRole(sub as string);
                token.role = userRole;
                token.id = sub;
            }
            return token;
        },
          async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            session.user.id = token.id as string;
            session.user.role = token.role as string;
            session.user.accessToken = token.accessToken as string;
            return session;
        }
    }
};