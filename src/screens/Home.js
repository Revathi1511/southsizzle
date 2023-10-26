import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import { Card } from 'react-bootstrap'
import Card from '../components/card'
import Carousel from '../components/carousal'

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel /></div>
      <div className='m-3'></div>
      
      {/* <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div> */}
      <div><Footer /></div>
    </div>
  )
}
