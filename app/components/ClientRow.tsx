'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Error from "./Error";
import Delete from "./Delete";
import Add from "./Add";
import Cancel from "./Cancel";
import Save from "./Save";
import GoodCheck from "./GoodCheck";

export default function ClientRow({ keys, title }: { keys: Array<string>; title: string }) {
    const router = useRouter();
    const [shouldAddRow, setShouldAddRow] = useState(false);
    const [shouldDeleteRow, setShouldDeleteRow] = useState(false);
    const [newRow, setNewRow] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const handleOnChange = (e: any) => {
        setNewRow({...newRow, [e.target.name]: e.target.value});
    };
    const handleOnCancel = () => {
      setShouldAddRow(false);
      setShouldDeleteRow(false);
      setNewRow({});
    };
    const handleOnSave = async (e: any) => {
        if (Object.keys(newRow).length === 0 ) {
            setShouldAddRow(false);
            setShouldDeleteRow(false);
            return;
        }
        let response; 
        try {
            response = await fetch(`/api/admin/${title}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newRow),
            });
            if (response.status === 200) {
                setSuccess(true);
                setError(false);
            } else {
                setSuccess(false);
                setError(true);
            }
            setMessage((await response.json()).message);
        } catch (e) {
            console.log(e);
            setMessage("Network Error");
        } 
        setShouldAddRow(false);
        setNewRow({});
    };
    const handleOnDelete = async (e: any) => {
        if (Object.keys(newRow).length === 0) {
          setShouldAddRow(false);
          setShouldDeleteRow(false);
          return;
        }
        let response;
        try { 
            response = await fetch(`/api/admin/${title}?id=${(newRow as any).id}`, {
                method: "DELETE"
            });
            if (response.status === 200) {
                setSuccess(true);
                setError(false);
                setMessage((await response.json()).message);
            } else {
                setSuccess(false);
                setError(true);
                setMessage((await response.json()).message);
            }
        } catch (e) {
            console.log(e);
            setMessage("Network Error");
        }
        setShouldDeleteRow(false);
        setNewRow({});
    };
    return (
      <>
        {shouldAddRow ? (
          <tr>
            {keys.map((key, index) => (
              <td className="bg-transparent" key={index}>
                <input
                  type="text"
                  name={keys[index]}
                  className="border border-yellow-500 bg-black"
                  onChange={(e) => handleOnChange(e)}
                  required
                  placeholder={
                    keys[index] === "id" || keys[index] === "createdAt"
                      ? "this is auto-generated"
                      : ""
                  }
                />
              </td>
            ))}
          </tr>
        ) : null}
        {shouldDeleteRow ? (
          <tr>
            <td className="bg-transparent">
              <input
                type="text"
                name={keys[0]}
                className="border border-yellow-500 bg-black"
                onChange={(e) => handleOnChange(e)}
                required
                placeholder="Enter ID to delete"
              />
            </td>
          </tr>
        ) : null}
        <tr>
          <td className="bg-transparent">
            {shouldAddRow || shouldDeleteRow ? (
              <span className="flex">
                <button
                  title="Cancel"
                  className="m-2 p-2 border border-red-500 hover:bg-red-500 hover:text-black"
                  onClick={() => handleOnCancel()}
                >
                  <Cancel />
                </button>
                {shouldDeleteRow ? (
                  <button
                    title="Save"
                    name={title}
                    className="m-2 p-2 border border-blue-500 hover:bg-blue-500 hover:text-black"
                    onClick={(e) => handleOnDelete(e)}
                  >
                    <Save />
                  </button>
                ) : (
                  <button
                    title="Save"
                    name={title}
                    className="m-2 p-2 border border-blue-500 hover:bg-blue-500 hover:text-black"
                    onClick={(e) => handleOnSave(e)}
                  >
                    <Save />
                  </button>
                )}
              </span>
            ) : (
              <span className="flex items-center">
                <button
                  title="Delete"
                  className="m-2 py-2 px-4 border border-red-500 hover:bg-red-500 hover:text-black"
                  onClick={() => setShouldDeleteRow(true)}
                >
                  <Delete />
                </button>
                <button
                  title="Add or Edit by ID"
                  className="m-2 py-2 px-4 border border-blue-500 hover:bg-blue-500 hover:text-black"
                  onClick={() => setShouldAddRow(true)}
                >
                  <Add />
                </button>
                {success && (
                  <span
                    className={`m-2 p-2 border border-green-500 hover:bg-green-500`}
                    title={message}
                    onClick={() => {
                      setSuccess(false);
                      router.refresh();
                    }}
                    // onAnimationStart={(e) => console.log("onAnimationStart")}
                    // onAnimationIteration={(e) =>
                    //   console.log("onAnimationIteration")
                    // }
                    // onAnimationEnd={(e) => {setShowSuccess(false); router.refresh();} }
                  >
                    <GoodCheck />
                  </span>
                )}
                {error && (
                  <span
                    className="m-2 py-2 px-4 border border-red-500 hover:bg-red-500"
                    title={message}
                    onClick={() => {
                      setError(false);
                      router.refresh();
                    }}
                  >
                    <Error />
                  </span>
                )}
              </span>
            )}
          </td>
        </tr>
      </>
    );
}
