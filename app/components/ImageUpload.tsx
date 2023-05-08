"use client";
import Image from "next/image";
import { useState, useLayoutEffect, useEffect } from "react";

export default function ImageUpload() {
    const [image, setImage] = useState<File | null>(null);
    const [url, setUrl] = useState<string>("");
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<String | null>(null);
    const imageTypes = ["image/png", "image/jpeg"];
    let reader : null | any = null;

    const handleChange = (e : any) => {
        reader = new window.FileReader();

        reader.onload = () => {
            setUrl(reader.result);
            console.log(reader.result);
        };
        let selectedImg = e.target.files[0];

        if (selectedImg && imageTypes.includes(selectedImg.type)) {
            setImage(selectedImg);
            reader.readAsDataURL(selectedImg);
            setError("");
        } else {
            setImage(null);
            setError("Please select an image file (png or jpeg)");
        }
    };
    return (
      <div className="flex flex-col border border-green-500 text-center">
        <b className="p-2">Image Upload</b>
        <form className="m-auto">
          <input
            type="file"
            className="file:text-white file:bg-black file:border-4 file:border-violet-700 file:p-2"
            onChange={handleChange}
          />
          <div className="output">
            {error && <div className="error">{error}</div>}
            {image && (
              <div>
                {image!.name}
                <Image src={url} alt="image" width={500} height={500} />
              </div>
            )}
            {progress > 0 && <div className="progress">{progress}</div>}
          </div>
          {/* <button onClick={handleUpload}>Upload</button> */}
        </form>
      </div>
    );
}
