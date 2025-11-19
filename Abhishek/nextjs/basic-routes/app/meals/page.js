import Link from "next/link";

export default function Meals(){
    return(
        
        <main><h1>meals</h1>
        <Link href='/meals/share'>share</Link><br/>
        <Link href='./community'>community</Link>
        </main>

    )
}