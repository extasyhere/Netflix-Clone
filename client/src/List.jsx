import React, { useEffect, useRef, useState } from 'react'
import "./List.scss"
import ListItem from './ListItem.jsx'
import Arrowback from "./left-arrow.png"
import Arrowforward from "./right-arrow.png"

export default function List({list}) {

  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            
            <div className="container" >
                {list.content.map((item,i)=>
                  <ListItem index={i} item={item}/>
                )}

            </div>
            

            
        </div>
    </div>
  )
}
