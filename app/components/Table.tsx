import ClientRow from "./ClientRow";

export default function Table({ title, data, thead} : {title: string, data: any, thead: any}) {
    let keys: Array<string> = [];
    if (data.length > 0) keys = Object.keys(data[0]);
    return(
    <div>
        <h1 className="text-3xl m-4 px-4">
            <b>{title}</b>
        </h1>
        <div className="overflow-x-auto">
            <table className="mb-4 table table-compact md:table-normal w-full ">
                {/* head */}
                <thead className="">
                    <tr>
                        {thead.map((entry: string, index: number) => (
                            <th key={index}>{entry}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry: any, index: number) => (
                    <tr key={index}>
                        { keys.map((key, index) => (
                            key === "image" ? <td key={index}><a target="_blank" href={`${entry[key]}`}>{`${entry[key]}`}</a></td> : <td key={index}>{`${entry[key]}`}</td>
                        ))}
                    </tr>
                    ))}
                    <ClientRow keys={keys} title={title.toLowerCase()}/>
                </tbody>
            </table>
        </div>
    </div>
    );
}
