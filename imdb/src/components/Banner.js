import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from '../banner.jpg'
function Banner() {

  const [movie, setMovie] = useState({})
    useEffect(function () {
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=82280f0074f1a0b7f649a10637be094d&page=1").then((res) => {
            console.table(res.data.results)
            setMovie(res.data.results[0])
        }
        )
    },[])

  return (
    <>
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[60vh] 
            bg-center bg-cover
            flex items-end 
        `}>
            <div className='text-xl md:text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50'>
                {movie.title}
            </div>
        </div>
    </>
  )
}

export default Banner