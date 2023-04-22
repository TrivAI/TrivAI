import Link from "next/link";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div>
        <h1 className="text-4xl text-center m-4 p-4">
            <b>Admin Panel</b>
        </h1>
        <div className="tabs">
            <Link className="tab tab-lg tab-bordered hover:tab-active transition ease-in-out" href="/admin"><b>Live</b></Link>
            <Link className="tab tab-lg tab-bordered hover:tab-active transition ease-in-out" href="/admin/users"><b>Users</b></Link>
            <Link className="tab tab-lg tab-bordered hover:tab-active transition ease-in-out" href="/admin/quiz"><b>Quiz</b></Link>
        </div>
        {children}
    </div>
  );
}