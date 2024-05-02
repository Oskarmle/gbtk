import React from 'react'

export default function Bestyrelse_card() {
  return (
    <div className='b_member-card'>
        <img src="../../assets/bestyrelse/pernille_bestyrelse.jpg" alt="" />
        <div className="b_member-info">
            <p className='b_title'>Formand</p>
            <h2 className='b_name'>Pernille Eskebo</h2>
            <div className="b_contact b_phone">
                <img src="../../assets/icons/phone.png" alt="" />
                <p>28388992</p>
            </div>
            <div className="b_contact b_mail">
                <img src="../../assets/icons/mail.png" alt="" />
                <p>Pernille@eskebo.dk</p>
            </div>
        </div>
    </div>
  )
}
