// import { getCurrentUser } from "@/src/session";
import ImageUpload from "../components/ImageUpload";

export default async function Admin() {
    // const theUser = await getCurrentUser();
    // if (!theUser) {
    //     return (
    //         <main className="">
    //             you are not signed in
    //         </main>
    //     );
    // }
    return (
        <main>
            <h1 className="text-3xl text-center">Admin Panel</h1>
            <ImageUpload />
        </main>
    );
}


