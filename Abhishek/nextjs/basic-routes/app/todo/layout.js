import Link from "next/link";
import React from "react";

export default function TodoLayout({children}){
   return ( <div className="min-h-screen min-w-screen">
    <header className="fixed top-0 w-full h-[10%]  flex justify-between items-center bg-amber-500">
        <h1 className="text-3xl font-bold text-black">Todo List</h1>
        <Link href="/" >Home</Link>
    </header>
    <main className="pt-[10%] pb-[10%]">
        {children}
    </main>
    <footer className="fixed bottom-0 w-full h-[10%] flex justify-between items-center bg-blue-200">
        <h1 className="text-3xl font-bold text-black">Footer</h1>
        <Link href='/'>Home</Link>
    </footer>
    </div>
   )
}