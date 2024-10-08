import React from 'react'

const NavBar = () => {
  return (
    <div className='flex bg-green-700 items-center justify-between p-6'>
        <h6>Logo</h6>
        <ul className='flex items-center justify-center gap-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li>Product</li>
        </ul>
    </div>
  )
}

export default NavBar