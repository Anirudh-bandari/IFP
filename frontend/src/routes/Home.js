import React from 'react'
import CardLong from "../components/CardLong"
import Navbar from '../components/Navbar'
import SecondCard from "../components/SecondCard"


export default function Home() {
  return (
   <> 
    <Navbar/>
    <br />
    <CardLong />
    <br />
    <SecondCard />
    </>
  )
}
