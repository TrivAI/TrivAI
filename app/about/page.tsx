import ClientAbout from "./ClientAbout";

export default async function Home() {
  const SIZE = 64;
  const id = Math.floor(Math.random() * 898) + 1;
  
  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { next: {revalidate: 5} }); 
  // http://worldtimeapi.org/api/timezone/America/Los_Angeles
  const res = await fetch(`http://worldtimeapi.org/api/timezone/America/Los_Angeles`, { next: {revalidate: 5} });
  const data = await res.json();
  console.log("thisis the datetime: ",data.datetime);
  
  let num = 0;
  console.log("got pokemon", num++);
  return (
    <main className="">
      <h1
        className="mb-4 gray-blackGradient flex p-2 justify-center lg:justify-start"
        aria-label="About"
      >
        {/* A */}
        <svg
          className="animate-bounce hover:scale-150 transition"
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="18"
            width="68"
            height="68"
            fill="black"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="10"
            width="68"
            height="68"
            fill="#DD7DFF"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M30 50H58" stroke="black" strokeWidth="8" />
          <path d="M61 66L45 22" stroke="black" strokeWidth="8" />
          <path d="M27 66L43 22" stroke="black" strokeWidth="8" />
        </svg>
        {/* B */}
        <svg
          className="hover:scale-150 transition "
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="18"
            width="68"
            height="68"
            fill="black"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="10"
            width="68"
            height="68"
            fill="#33c1ff"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M32 64H44C52.6274 64 56 58.6274 56 52C56 45.3726 52.6274 40 44 40H32"
            stroke="black"
            strokeWidth="8"
          />
          <path
            d="M32 24H44C49.4183 24 52 27.5817 52 32C52 36.4183 49.4183 40 44 40H32"
            stroke="black"
            strokeWidth="8"
          />
          <path d="M32 68L32 20" stroke="black" strokeWidth="8" />
        </svg>
        {/* O */}
        <svg
          className="hover:scale-150 transition"
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="18"
            width="68"
            height="68"
            fill="black"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="10"
            width="68"
            height="68"
            fill="#88FF8A"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M44 64C57.0457 64 58 55.0457 58 44C58 32.9543 57.0457 24 44 24C30.9543 24 30 32.9543 30 44C30 55.0457 30.9543 64 44 64Z"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
        {/* U */}
        <svg
          className="hover:scale-150 transition"
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="18"
            width="68"
            height="68"
            fill="black"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="10"
            width="68"
            height="68"
            fill="#ccb680"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M30 20V44C30 55.0457 30.9543 64 44 64C57.0457 64 58 55.0457 58 44V20"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
        {/* T */}
        <svg
          className="hover:scale-150 transition"
          width={String(SIZE)}
          height={String(SIZE)}
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="18"
            width="68"
            height="68"
            fill="black"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="10"
            y="10"
            width="68"
            height="68"
            fill="#FFB443"
            stroke="black"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path d="M60 24H28" stroke="black" strokeWidth="8" />
          <path d="M44 68L44 20" stroke="black" strokeWidth="8" />
        </svg>
      </h1>
      <div>{data.datetime}</div>
      <ClientAbout />
    </main>
  );
}
