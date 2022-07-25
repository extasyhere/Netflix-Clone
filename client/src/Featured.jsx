import React from 'react'
import "./Featured.scss"
import Play from './play.png'
import Info from './info.png'
import Extasy from './poster.png'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'






export default function Featured({type}) {
    const[content,setContent]=useState({});

    useEffect(()=>{
      const getrandomcontent= async()=>{
        try{
          let iftype;
          if(type){
            iftype="?type="+type;
          }else{
            iftype="";
          }
          const res=await axios.get('/movies/random'+iftype,{
            headers:{
                token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDA4NDE4MywiZXhwIjoxNjU0Njg4OTgzfQ.I5G4ZQhVuEMeG3O3Pu5ynrc724YGkhiMewI48DBy8ww"
              }
          })
          console.log(res.data[0])
          setContent(res.data[0])
        }catch(err){
          console.log(err)
        }
  
      };
      getrandomcontent()
    },[type])

    if(!content)
    return <></>  
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>
        )}qrd 
        <img src={content.img} alt="" />
        <div className="info">
            <img src={content.imgTitle} alt="" />
            <span className='desc'>{content.desc}</span>
            <div className="buttons">
                <button className="play">
                    
                    <img src={Play} alt="" />
                    <span>Play</span>

                </button>
                <button className="more">
                    <img src={Info} alt="" />
                    <span>Info</span>
                </button>

            </div>
        </div>

    </div>
  )
}
