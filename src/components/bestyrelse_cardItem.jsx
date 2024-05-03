import React from 'react'

export default function Bestyrelse_cardItem({member}) {
  return (
    <div className='b_member-card'>
        <img src={member.image} alt="" />
        <div className="b_member-info">
            <p className='b_title'>{member.title}</p>
            <h2 className='b_name'>{member.name}</h2>
            <div className="b_contact b_phone">
                <img src="../../assets/icons/phone.png" alt="" />
                <p>{member.phone}</p>
            </div>
            <div className="b_contact b_mail">
                <img src="../../assets/icons/mail.png" alt="" />
                <p>{member.mail}</p>
            </div>
        </div>
    </div>
  )
}
