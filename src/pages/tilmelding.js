import React from "react";
import "../styles/tilmeld.css";
import Kontingent from "../components/kontingent";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Tilmedling() {
  return (
    <>
    <Header></Header>
      <div className="join_container">
        <h1>Tilmeld dig klubben</h1>
        <p>
          Vi er glade for, at du vil være medlem i Gladsaxe Bordtennisklub, og
          byder dig hermed velkommen til mange sjove timer med god motion og
          godt kammeratskab, hvad enten du overvejer, om bordtennis skal være
          din nye sportsaktivitet, eller du allerede er bordtennisspiller. Husk
          herunder at anføre hvilket hold det drejer sig om.
        </p>
        <p>
          For nye ungdomsspillere vil det oftest være "Prøvehold ungdom" og for
          nye seniorer vil det oftest være "Senior motionist". Ønsker du at
          deltage i stævner og holdturnering, skal du vælge ”Senior
          Holdspiller”. Når du er registreret, og vi har din mailadresse, vil du
          løbende få tilsendt informationer om aktiviteter, stævner osv.
        </p>
        <div className="join_content">
          <Kontingent></Kontingent>
          <div>
            <div className="join_formula">
              <img src="../../assets/icons/profile.png" alt=""></img>
              <h2>Personlig information</h2>
            </div>
            <iframe
              src="https://www.holdsport.dk/external_team_applications/new?club_id=22476"
              width="780"
              height="800"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
