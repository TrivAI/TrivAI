import NextAuth from "next-auth"
import { authOptions } from "@/src/auth"

export default NextAuth(authOptions);