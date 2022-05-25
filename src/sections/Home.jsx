import React from 'react'
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';

export const Home = () => {
  return (
    <div id="home" className='home'>
    <Announcement/>
    <Navbar/>
   <h1>Home</h1>
    </div>
  )
}
