export default function StableDiffusionPreview() {
    return (
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl m-4 px-4">
          <b>Test your prompt</b>
        </h1>
        <div className="mt-12 w-full border border-red-500">
          <div className="my-96 p-4">
            <div>
                <form action="">
                    <input type="text" name="prompt" id="prompt" placeholder="Type in here dude" className="bg-black text-center w-full py-4 border border-red-500" />
                </form>
            </div>
          </div>
        </div>
      </div>
    );
}