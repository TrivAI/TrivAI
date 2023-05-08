export default function Error() {
    const SIZE = 36;
    return (
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
        <path d="M10 10H78V78H10V10Z" fill="#FF5E5E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 10C8 8.89543 8.89543 8 10 8H78C79.1046 8 80 8.89543 80 10V78C80 79.1046 79.1046 80 78 80H10C8.89543 80 8 79.1046 8 78V10ZM12 12V76H76V12H12Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.8578 63.7989L63.799 29.8578L58.1421 24.2009L24.201 58.1421L29.8578 63.7989Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M63.7991 58.1419L29.858 24.2008L24.2011 29.8577L58.1423 63.7988L63.7991 58.1419Z"
          fill="black"
        />
      </svg>
    );
}