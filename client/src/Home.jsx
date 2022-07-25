import React, { useEffect, useState } from 'react'
import "./Home.scss"
import Navbar from './Navbar.jsx'
import Featured from './Featured.jsx' 
import List from './List'
import axios from "axios"



const Home = ({type}) => {
  const [lists,setLists]=useState([]);
  const [genre,setGenre]=useState(null);

  useEffect(()=>{
    const getRandomLists= async()=>{
      try{
        let iftype;
        let ifgenre;
        if(type){
          iftype="?type="+type;
        }else{
          iftype="";
        }
        if(genre){
          ifgenre="?genre="+genre;
        }else{
          ifgenre="";
        }
        const urlLink="lists" + iftype + ifgenre;
        const res= await axios.get(
        urlLink,{
           headers:{
             token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDA4NDE4MywiZXhwIjoxNjU0Njg4OTgzfQ.I5G4ZQhVuEMeG3O3Pu5ynrc724YGkhiMewI48DBy8ww"
           }
        }
      );
      console.log(res.data)
      setLists(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  },[type,genre])
  return (
    
    <div className='home'>
      <Navbar/>
      <Featured type={type}/>
      {lists.map((list)=>
      <List list={list}/>      
      )}
    </div>
  )
}

export default Home;