export default function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any;
}) {
  const SIZE =64;  
  return (
    <>
      <h1 className="mb-4 p-2 gray-blackGradient flex justify-center lg:justify-start" aria-label="Quiz">
          {/* Q */}
          <svg className="animate-bounce hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <rect x="10" y="10" width="68" height="68" fill="#DD7DFF" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M44 64C57.0457 64 58 55.0457 58 44C58 32.9543 57.0457 24 44 24C30.9543 24 30 32.9543 30 44C30 55.0457 30.9543 64 44 64Z" stroke="black" strokeWidth="8"/>
              <path d="M60 68L46 52" stroke="black" strokeWidth="8"/>
          </svg>
          {/* U */}
          <svg className="hover:scale-150 transition "width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <rect x="10" y="10" width="68" height="68" fill="#39DBFF" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M30 20V44C30 55.0457 30.9543 64 44 64C57.0457 64 58 55.0457 58 44V20" stroke="black" strokeWidth="8"/>
          </svg>
          {/* I */}
          <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <rect x="10" y="10" width="68" height="68" fill="#88FF8A" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M52 64L36 64" stroke="black" strokeWidth="8"/>
              <path d="M44 68L44 20" stroke="black" strokeWidth="8"/>
              <path d="M52 24L36 24" stroke="black" strokeWidth="8"/>
          </svg>
          {/* Z */}
          <svg className="hover:scale-150 transition" width={String(SIZE)} height={String(SIZE)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="18" y="18" width="68" height="68" fill="black" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <rect x="10" y="10" width="68" height="68" fill="#FFB443" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
              <path d="M56 24L32 24" stroke="black" strokeWidth="8"/>
              <path d="M56 64L32 64" stroke="black" strokeWidth="8"/>
              <path d="M32 64L56 24" stroke="black" strokeWidth="8"/>
          </svg>
      </h1>
      {children}
    </>
  )
}
