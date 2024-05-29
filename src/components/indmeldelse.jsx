import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Indmeldelse() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/tilmelding")
  }
  return (
    <div className='join'>
        <div className='join1'>
            <h2 className='join_header'>Indmelding</h2>
            <p>Vi er meget glade for at du vil være medlem af Gladsaxe Bordtennisklub</p>
            <p>Når du trykker på knappen herunder, kommer du til en indmeldelsesformular, og du kan også se klubbens årskontingent</p>
            <button onClick={handleClick} className='join_button'>Tilmeld</button>
        </div>
        <div className='join2'>
            <p>Hvis du allerede er medlem af en anden klub, er det vigtigt at du melder dig ud der først.</p>
            <p>Hvis du samtidig ønsker at spille på hold, kan du skrive til Oskar på omle.eriksen@gmail.com</p>
        </div>
    </div>
  )
}
