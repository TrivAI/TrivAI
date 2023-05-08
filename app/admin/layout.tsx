import Link from "next/link";
import { getCurrentUser } from "@/src/session";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const user = await getCurrentUser();
  const SIZE = 64;
  return (
    <div aria-label="content">
      <h1
        className="mb-4 p-2 gray-blackGradient flex justify-center lg:justify-start"
        aria-label="Quiz"
      >
        {/* A */}
        <svg
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18H86V86H18V18Z" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C16 16.8954 16.8954 16 18 16H86C87.1046 16 88 16.8954 88 18V86C88 87.1046 87.1046 88 86 88H18C16.8954 88 16 87.1046 16 86V18ZM20 20V84H84V20H20Z"
            fill="black"
          />
          <path d="M10 10H78V78H10V10Z" fill="#DD7DFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 10C8 8.89543 8.89543 8 10 8H78C79.1046 8 80 8.89543 80 10V78C80 79.1046 79.1046 80 78 80H10C8.89543 80 8 79.1046 8 78V10ZM12 12V76H76V12H12Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58 54H30V46H58V54Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.2408 23.367L57.2408 67.367L64.7592 64.6331L48.7592 20.6331L41.2408 23.367Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.7592 23.367L30.7592 67.367L23.2408 64.6331L39.2408 20.6331L46.7592 23.367Z"
            fill="black"
          />
        </svg>

        {/* U */}
        <svg
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18H86V86H18V18Z" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C16 16.8954 16.8954 16 18 16H86C87.1046 16 88 16.8954 88 18V86C88 87.1046 87.1046 88 86 88H18C16.8954 88 16 87.1046 16 86V18ZM20 20V84H84V20H20Z"
            fill="black"
          />
          <path d="M10 10H78V78H10V10Z" fill="#39DBFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 10C8 8.89543 8.89543 8 10 8H78C79.1046 8 80 8.89543 80 10V78C80 79.1046 79.1046 80 78 80H10C8.89543 80 8 79.1046 8 78V10ZM12 12V76H76V12H12Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 20H36C44.3387 20 50.5919 22.5122 54.6721 27.2465C58.6562 31.8692 60 37.9623 60 44C60 50.0377 58.6562 56.1308 54.6721 60.7535C50.5919 65.4878 44.3387 68 36 68H32V60H36C42.707 60 46.4538 58.0351 48.6122 55.5308C50.8667 52.9149 52 49.008 52 44C52 38.992 50.8667 35.0851 48.6122 32.4692C46.4538 29.9649 42.707 28 36 28H32V20Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 20L36 68L28 68L28 20L36 20Z"
            fill="black"
          />
        </svg>

        {/* M */}
        <svg
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18H86V86H18V18Z" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C16 16.8954 16.8954 16 18 16H86C87.1046 16 88 16.8954 88 18V86C88 87.1046 87.1046 88 86 88H18C16.8954 88 16 87.1046 16 86V18ZM20 20V84H84V20H20Z"
            fill="black"
          />
          <path d="M10 10H78V78H10V10Z" fill="#88FF8A" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 10C8 8.89543 8.89543 8 10 8H78C79.1046 8 80 8.89543 80 10V78C80 79.1046 79.1046 80 78 80H10C8.89543 80 8 79.1046 8 78V10ZM12 12V76H76V12H12Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.3234 48.4243L52.3234 20.4243L59.6766 23.5757L47.6766 51.5757L40.3234 48.4243Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.0164 66.362L52.0164 22.362L59.9836 21.6377L63.9836 65.6377L56.0164 66.362Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.6766 48.4243L35.6766 20.4243L28.3234 23.5757L40.3234 51.5757L47.6766 48.4243Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.9836 66.362L35.9836 22.362L28.0164 21.6377L24.0164 65.6377L31.9836 66.362Z"
            fill="black"
          />
        </svg>

        {/* I */}
        <svg
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18H86V86H18V18Z" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C16 16.8954 16.8954 16 18 16H86C87.1046 16 88 16.8954 88 18V86C88 87.1046 87.1046 88 86 88H18C16.8954 88 16 87.1046 16 86V18ZM20 20V84H84V20H20Z"
            fill="black"
          />
          <path d="M10 10H78V78H10V10Z" fill="#ccb680" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 10C8 8.89543 8.89543 8 10 8H78C79.1046 8 80 8.89543 80 10V78C80 79.1046 79.1046 80 78 80H10C8.89543 80 8 79.1046 8 78V10ZM12 12V76H76V12H12Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 60L52 60L52 68L36 68L36 60Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48 20L48 68L40 68L40 20L48 20Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 20L52 20L52 28L36 28L36 20Z"
            fill="black"
          />
        </svg>
        <svg
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 18H86V86H18V18Z" fill="black" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C16 16.8954 16.8954 16 18 16H86C87.1046 16 88 16.8954 88 18V86C88 87.1046 87.1046 88 86 88H18C16.8954 88 16 87.1046 16 86V18ZM20 20V84H84V20H20Z"
            fill="black"
          />
          <path d="M10 10H78V78H10V10Z" fill="#FFB443" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 10C8 8.89543 8.89543 8 10 8H78C79.1046 8 80 8.89543 80 10V78C80 79.1046 79.1046 80 78 80H10C8.89543 80 8 79.1046 8 78V10ZM12 12V76H76V12H12Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60 22L60 66L52 66L52 22L60 22Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 22L36 66L28 66L28 22L36 22Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.5116 20.0847L59.5116 64.0847L52.4884 67.9155L28.4884 23.9155L35.5116 20.0847Z"
            fill="black"
          />
        </svg>
      </h1>
      {user?.role === "ADMIN" ? (
        <>
          <div className="tabs">
            <Link
              className="tab tab-bordered tab-s hover:tab-active transition ease-in-out md:tab-md lg:tab-lg"
              href="/admin"
            >
              <b>Live</b>
            </Link>
            <Link
              className="tab tab-bordered tab-s hover:tab-active transition ease-in-out md:tab-md lg:tab-lg"
              href="/admin/users"
            >
              <b>Users</b>
            </Link>
            <Link
              className="tab tab-bordered tab-s hover:tab-active transition ease-in-out md:tab-md lg:tab-lg"
              href="/admin/quiz"
            >
              <b>Quiz</b>
            </Link>
            <Link
              className="tab tab-bordered tab-s hover:tab-active transition ease-in-out md:tab-md lg:tab-lg"
              href="/admin/stablediffusionpreview"
            >
              <b>Stable Diffusion Preview</b>
            </Link>
          </div>
          {children}
        </>
      ) : (
        <>
          <h1 className="text-3xl text-center">Sneaky Sneaky</h1>
          <p> You are not authorized for this page.</p>
        </>
      )}
    </div>
  );
}
    