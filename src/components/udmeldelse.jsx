import React from 'react'

export default function Udmeldelse() {
  return (
    <div className='dropout'>
        <div className='dropout1'>
            <h2 className='dropout_header'>Udmelding</h2>
            <p>Kontingentet er bindende for hele sæsonen og tilbagebetales ikke, uanset årsag.</p>
            <p>Hvis du ikke ønsker at være medlem mere, bedes du skrive til klubbens kasserer via e-mail.</p>
            <div className='dropout_mail'>
                <img src="../../assets/icons/mail.png" alt="" />
                <p>Ibo@post.tele.dk</p>
            </div>
        </div>
        <div className='dropout2'>
            <p>Hvis du ønsker at begrunde hvorfor du udmelder dig, kan du udfylde dette spørgeskema.</p>
            <p>Det er anonymt, og vil blive brugt til at forbedre klubben</p>
            <p className='dropout_q'>Spørgeskema</p>
        </div>
    </div>
  )
}
