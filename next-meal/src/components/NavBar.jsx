"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import React from 'react'

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();

    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"Meals",
            path:"/meals"
        }
    ]
    const handle = () =>{
        router.push("/login");
    }
  return (
        <nav className='flex items-center justify-between bg-cyan-600 p-10'>
            <h5>Next Hero</h5>
            <ul className='flex items-center justify-center gap-4'>
                {
                    links.map(link=><Link className={`${pathName === link.path}`} href={link.path} key={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handle}>Login</button>
        </nav>
  )
}

export default NavBar