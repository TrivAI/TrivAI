export default function CatchAll( {params} : {params : {slug: string[]}} ) {
    let { slug } = params;
    console.log(slug);
    
    return (
        <div>
            <h1> aye dude i think u entered this "{slug}" its not a path my dude</h1>
        </div>
    )
}