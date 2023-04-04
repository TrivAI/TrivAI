import { notFound } from "next/navigation";

export default function Page({ params } : {params: { slug: string } } ) {
    return (
        <>
            {notFound()}
        </>
    );
}