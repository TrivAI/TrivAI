import ClientAbout from "./ClientAbout";
import Image from 'next/image';

export default async function Home() {
  const SIZE = 64;
  const id = Math.floor(Math.random() * 898) + 1;
  
  // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { next: {revalidate: 5} }); 
  // http://worldtimeapi.org/api/timezone/America/Los_Angeles
  const res = await fetch(`http://worldtimeapi.org/api/timezone/America/Los_Angeles`, { next: {revalidate: 5} });
  const data = await res.json();
  console.log(data.datetime);
  
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

  
        <img
        src="https://ffedfa9136087533df93b491bd0abe6d1c8b237e43e12160716e20a-apidata.googleusercontent.com/download/storage/v1/b/trivai-images/o/trivaichart.png?jk=ARTXCFErbJU4rq128yXyzTJ7MOIZ7OsWxLdowm9j5Y7-Ykb9aqRXQxtNJX8f2-P2_GqUU2-0JZgbEmw5Q5rgcGTERYHMdknu7MYk6ufL0pY3gaVpzHE4djmDIl0salREhpseXHAuB6VVD3ZWaMhDS4BMz-Clt4a1F3bLBML5CwxDcKZIms4bS04IA0j6_d5yfFBdX7lFCdSjcn15q4ssZLJ_Ywc7nhj1MxL7yiqFCOOTyAI3OsfD82lsb5WyxdDkULOLd0LR9_gb-2ZnhH3_ZrwtKLHFRNFGbXM__Nd__8IbwNPwbBkoxa8mfkHNolfONwKn2Mmjy86jETUQAoWdD9vUJBOpaagOB92VBka87h5xQYItExV3XAntMQQmTQHT1wflUVyNf8n2FC1cWhkROVOsHVidTluJPhrRmwBSen_1ny1hM5zFSg4yAsCFHdpGEFYVudj0aedertkAg__D0MomVQHBwxi83UbEm6kW9OMkZOiCCMOjAULenzjAWe2gpHyImObvS8bA-7A-xR89yuEdpQuaNWep7ETvQ_9y7gKN1HXXf2plysJChEzwn_Wx22MutAVsu_5j934qi-AMHPfgd4UPNZ8ykXuTVyxZZ1LXEEuT81cwFPNGzZAEs0hv4IIbGqClwwPGaozbkMLBzbIgCwdE2WPt_gfqJhAlrFc5eKAgojQEv7wZvnkhkiPXRojFvLzqbgpuoPMxrQ9C3VvpsoIOdKZbWX3-6CF6dtcXxp3I-Ho0VfCCOtTY4ylcRO7Gx6uPWkhWo7xM5Fqf_Iv7xgF1nGVCTwuY9timuNhKrL4CSp1z7CSMoyKIsoPQ_FB6SApOE0mtlqgvpOhu0awhzTiUZeutpycqjpCgvFJWCPVYVLiWBVxGSx--5NQhlkTAlNog9_oHHbzc-48-3yIb5odOukzhAlymxTYUhRW3QDBiuG_RxmGTTaCd5VZ3YFMSdJjo67mKnsyHkMK8VsVxONCthVV1QIBJQEwm_-fh8p9Yp5_8fFMboo9F52mobcfUoVTmn6VhQETXVyW-wt01-Pt4OTt0NZF8f-ui4UfbnnCqu7j-85kZSBiu6WF8n9iq8LT6fN_8dkVsUmt4gBVXHzkby1o47BlSYMwvvSTz9yzfjFyahwPeYJvo3wX6kjIeKLGgVSNAxN0-G4aRJlJioFROIjT0jl3fjdiHlQbWb4HAu4dsxc42VpdC7ggx8MlO&isca=1"
        alt="trivAI chart"
        width={500}
        height={500}
        />
    

    </main>
  );
}