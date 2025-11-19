export default async function slug({params}){
    const param =await params;
    return(
        <main>
            <h1>{param.slug}</h1>
        </main>
    )
}