

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


    // reader.onload = function () {
    //     base64String = reader.result.replace("data:", "")
    //         .replace(/^.+,/, "");

    //     imageBase64Stringsep = base64String;

    //     // alert(imageBase64Stringsep);
    //     console.log(base64String);
    // }
    // useIsomorphicLayoutEffect(() => {
    // reader = new window.FileReader();
    // console.log("rendering...");
    // reader.onload = () => {
    //         base64String = reader.result;
    //         console.log(base64String);
    //     }
    // }, [])



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

    // const handleUpload = () => {
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //     uploadTask.on('state_changed', (snapshot) => {
    //         // progress function...
    //         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //         setProgress(progress);
    //     }, (error) => {
    //         // Error function...
    //         setError(error);
    //     }, () => {
    //         // complete function...
    //         storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //             setUrl(url);
    //         })
    //     });
    // }

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