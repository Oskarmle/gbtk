import React from 'react'
import "../styles/index.css"
import "../styles/header.css"

export default function Header() {
  return (
    <>
    <div className='header'> 
        <a className='logo_img_container'>
            <img src="../../assets/gbtk_dark_logo.png" alt="" className='logo'/>
        </a>
        <a className='header_link'>
            <h2>Information</h2>
        </a>
        <a className='header_link'>
            <h2>Kontakt</h2>
        </a>
        <a className='header_link'>
            <h2>Kalender</h2>
        </a>
        <a className='header_link'>
            <h2>Bestyrelse</h2>
        </a>
        <a className='header_link'>
            <h2>Butik</h2>
        </a>
    </div>
    </>
  )
}
