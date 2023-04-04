"use client";

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
      <form>
        <input
          type="file"
          className="file:text-violet-700 file:bg-white file:border-0"
          onChange={handleChange}
        />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {image && (
            <div>
              {image!.name}
              <img src={url}></img>
            </div>
          )}
          {progress > 0 && <div className="progress">{progress}</div>}
        </div>
        {/* <button onClick={handleUpload}>Upload</button> */}
      </form>
    );
}
