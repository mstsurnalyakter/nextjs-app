

import Meals from '@/components/Meals'
import React from 'react'

const MealsPage = () => {
  return (
    <div className='p-12 w-4/5 mx-auto text-center'>
        <h1 className='font-bold text-3xl text-sky-300 mb-2'>Choose Your Meals</h1>
        <p>Choose meals of you choice by searching..........</p>
         <Meals/>


    </div>
  )
}

export default MealsPage