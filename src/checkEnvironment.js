

export default function checkEnvironment(whereisitran) {
    // console.log("running from check" + whereisitran);
    // console.log(">>>> this is the env: " + process.env.SERVER_ENV);
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com"; // https://v2ds.netlify.app

  return base_url;
};