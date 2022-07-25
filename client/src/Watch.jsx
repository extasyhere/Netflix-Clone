import React from 'react'
import trailer from './trailer.mp4'
import Back from './back.png'
import"./Watch.scss"
import { Link, useLocation } from 'react-router-dom'


export default function Watch() {
  const location=useLocation();
  console.log(location)
  const movie=location.movie;
  
  if(!movie)
    return <></>
    return (
    
    <div className='watch'>
      <Link to="/">
        <div className="back">
            <img className='backbuton' src={Back} alt="" />
            Home
        </div>
        </Link>
        <video className='video' src={movie.trailer} autoPlay progress controls/> 
      
    </div>
  )
}
