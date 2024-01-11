import React from 'react'

import "../styles/single.css"
import Sidebar from "../components/Sidebar"
import SinglePost from './SinglePost'

function Single() {
  return (
    <div className='single'>
        <SinglePost></SinglePost>
        <Sidebar></Sidebar>
        
     
    </div>
  )
}

export default Single