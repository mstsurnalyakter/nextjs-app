"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'

const NavBar = () => {

    const pathName = usePathname();
    const router = useRouter();
    console.log(pathName);

    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Services",
            path:"/services"
        },
        {
            title:"Products",
            path:"/product"
        },
        {
            title:"Blogs",
            path:"/blogs"
        },
    ]

    const handleClick = () =>{
        router.push('/about')
    }

  return (
    <div className='flex bg-purple-400 items-center justify-between p-6'>
        <h6>Next <span>App</span></h6>
        <ul className='flex items-center justify-center gap-6'>
           {
            links.map(link=><Link className={`${pathName===link.path ? "text-teal-700 underline" : "text-indigo-100"} font-bold text-lg`} href={link.path} key={link.path}>{link.title}</Link>)
           }
        </ul>
        <button onClick={handleClick} className='bg-green-600 rounded-md px-3 py-2'>Login</button>
    </div>
  )
}

export default NavBar