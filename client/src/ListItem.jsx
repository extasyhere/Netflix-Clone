import React, { useState ,useEffect} from 'react'
import "./ListItem.scss"
import Play from "./play white.png"
import Dislike from"./dislike.png"
import Like from"./like.png"
import Plus from"./plus.png"
import trailer from"./trailer.mp4"
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function ListItem({index,item}) {
  const[isHovered,setIsHovered] = useState(false)
  const[movie,setMovie] = useState()
  
  useEffect(()=>{
    const getMovie =async()=>{
      try{
        const res = await axios.get("/movies/find/"+ item,{
          headers:{
            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDA4NDE4MywiZXhwIjoxNjU0Njg4OTgzfQ.I5G4ZQhVuEMeG3O3Pu5ynrc724YGkhiMewI48DBy8ww"
          }
        })
        //console.log(res.data)
        setMovie(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getMovie();
  },[item]
);
if(!movie)
    return <></>
  return (
    <Link to={{pathname:"/watch", movie:movie}}>
      <div className="listItem"
      /*style={{left: isHovered && index *225 - 27.5 + index*2.5 }*/ 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false )}>
          <img className='poster' src={movie.img} />
          {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true}></video>
            <div className="itemInfo">
              <div className="icons">
                <img className='icon' src={Play} alt="" />
                <img className='icon' src={Plus} alt="" />
                <img className='icon' src={Like} alt="" />
                <img className='icon' src={Dislike} alt="" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className='limit'>{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">
                  {movie.desc}
              </div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
          )}
      </div>
    </Link>
  )
}
