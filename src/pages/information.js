import React from 'react'
import "../styles/information.css"
import Information_start from '../components/information_start'
import Footer from "../components/footer";
import Accordion from '../components/accordion/Accordion';

export default function Information() {
  return (
    <div className='information_container'>
      <h1>Information</h1>
      <Information_start></Information_start>
      <Accordion></Accordion>
      <Footer></Footer>
    </div>
  )
}
