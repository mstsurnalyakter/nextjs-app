import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <div className='bg-green-400 p-6 text-center'>
            Dashboard Navbar
        </div>
        <div className='flex min-h-screen items-center justify-center'>
            {children}
        </div>
        <div className='bg-green-400 p-6 text-center'>
            Dashboard Footer
        </div>
    </div>
  )
}

export default DashboardLayout