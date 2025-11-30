import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from "../../public/file.svg"
import { auth } from '../api/auth/auth'
import { signIn, signOut } from 'next-auth/react'

const Navbar = async () => {

    const session = await auth();
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-works-sans'>
        <div className="flex justify-between items-center">
            <Link href="/">
            <Image src="/file.svg" alt="logo"width ={144} height={38}/>
            </Link>
            <div className="flex items-center gap-5 text-black">
                {session && session?.user ?(
                    <>
                    <Link href ="/startup/create">
                    <span>Create</span>
                    </Link>
                    <form action={()=>{  signOut({redirectTo:"/"})}}>
                       <button type="submit">Logout</button>
                    </form>
                    <Link href={`/users/${session}`}>
                    <span>{session?.user?.name}</span></Link>
                    </>
                ):(
                    <>
                    <form action={async()=>{
                        "use server";
                        await signIn('github')}}>
                        <button type="submit">Login</button>
                    </form>
                    </>
                )}
            </div>
        </div>
    </header>
  )
}

export default Navbar
