import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact_container">
      <div className="contact_intro">
        <h1>Kontakt</h1>
        <p>
          Vi spiller på 1. sal under den gamle tribune - ud mod
          kunstgræsbanerne.
        </p>
      </div>
      <div className="contact_card">
        <div className="contact_info">
          <div className="contact_info_section">
            <img src="../../assets/icons/phone.png" alt="" />
            <p>+ 45 xx xx xx xx</p>
          </div>
          <div className="contact_info_section">
            <img src="../../assets/icons/mail.png" alt="" />
            <p>Gladsaxebordtennisklub@gmail.com</p>
          </div>
          <div className=" contact_info_section">
            <img src="../../assets/icons/map.png" alt="" />
            <div className="adress">
              <p>Gladsaxe Stadion</p>
              <p>Gladsaxevej 200</p>
              <p>2860 Søborg</p>
            </div>
          </div>
          <div className="contact_info_section">
            <img src="../../assets/icons/transport.png" alt="" />
            <div className="transport">
              <p>Der er flere busser som stopper tæt på</p>
              <p>Du kan se hvilke via rejseplanen.dk eller linket herunder:</p>
              <a href="">Tjek Rejseplanen her</a>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1869.1682081037893!2d12.495191051165502!3d55.732232068815215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e3c95462bab%3A0x7c228d86cbb8bf68!2sGladsaxe%20Bordtennisklub!5e1!3m2!1sen!2sdk!4v1714563137785!5m2!1sen!2sdk"
          width="840"
          height="620"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
