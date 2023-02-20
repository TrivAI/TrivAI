

'use client';

import {useState, useLayoutEffect, useEffect} from 'react'


export default function ImageUpload() {
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
    let base64String = '';
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const imageTypes = ['image/png', 'image/jpeg'];
    let reader = null;

    const handleChange = (e) => {
        reader = new window.FileReader();
        
        reader.onload = () => {
            base64String = reader.result;
            console.log(base64String);
        }
        let selectedImg = e.target.files[0];
        console.log(e.target.files);

        if (selectedImg && imageTypes.includes(selectedImg.type)) {
            // setImage(selectedImg);
            reader.readAsDataURL(selectedImg);
            setError('');
        } else {
            setImage(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    return (
        <form>
            <input type="file" className="file:text-violet-700 file:bg-white file:border-0" onChange={handleChange} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {image && <div>{image.name}</div>}
                {progress > 0 && <div className="progress">{progress}</div>}
            </div>
            {/* <button onClick={handleUpload}>Upload</button> */}
        </form>
    )
}