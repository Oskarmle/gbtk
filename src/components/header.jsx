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
            <h3>Information</h3>
        </a>
        <a className='header_link'>
            <h3>Kontakt</h3>
        </a>
        <a className='header_link'>
            <h3>Kalender</h3>
        </a>
        <a className='header_link'>
            <h3>Bestyrelse</h3>
        </a>
        <a className='header_link'>
            <h3>Butik</h3>
        </a>
    </div>
    </>
  )
}
