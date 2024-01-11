import React from 'react'

import Header from "../components/Header"

import Sidebar from "../components/Sidebar"

import "../styles/home.css"

import Posts from "../components/Posts"


function Home() {
  return (
    <div>
        <Header></Header>
        <div className='home'>
         
          <Posts></Posts>
          <Sidebar></Sidebar>
        </div>
   
    </div>
  )
}

export default Home