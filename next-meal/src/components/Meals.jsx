"use client"

import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [search, setSearch] = useState("");
    const [mealsData,setMealsData] = useState([])
    const [error,setError] = useState("")
    console.log(mealsData);


    const loadData = async () =>{
       try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
        );
        const data = await res.json();
        console.log("data.meals", data.meals);
        setMealsData(data.meals);
        setError("")
       } catch (error) {
        setError("No Data Found.")
        setMealsData([])
        console.log(error);
       }
    }


    const handleSearch = ( e) =>{
        setSearch(e.target.value);

    }
    useEffect(()=>{
        loadData();

    },[search])
  return (
    <div className="mt-6 w-full">
      <div>
        <input
          onChange={handleSearch}
          type="text"
          className="border-2 text-gray-600 border-sky-500 p-2"
          placeholder="Search Meals......"
        />
        <button className="bg-sky-500 py-[10px] px-3">Search</button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
        {mealsData?.length > 0 && !error &&
          mealsData?.map((meal) => (
            <div className="border-2 py-5 px-2 space-y-2" key={meal.idMeal}>
              <h2 className='text-2xl font-bold'>{meal?.strMeal}</h2>
              <p title={meal?.strInstructions} >{meal?.strInstructions.slice(0,100)}....</p>
            </div>
          ))

          }
          {
            error && <h3>No Data Found</h3>
          }
      </div>
    </div>
  );
}

export default Meals