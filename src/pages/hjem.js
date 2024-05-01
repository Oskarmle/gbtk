import React from "react";
import "../styles/index.css";
import "../styles/hjem.css";
import Hero from "../components/hero";
import Sponsor from "../components/sponsor";
import Footer from "../components/footer";
import Important_news from "../components/important_news";
import Section3 from "../components/section3";

export default function Hjem() {
  return (
    <>
      <div className="container">
        <Hero></Hero>
        <Sponsor></Sponsor>
        <div className="fp_section2">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089202527708&tabs=timeline&width=500&height=620&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="620"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            data-show-facepile="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="facebook_feed"
          ></iframe>
          <Important_news></Important_news>
        </div>
        <div className="fp_section3">
          <Section3></Section3>
          <Section3></Section3>
          <Section3></Section3>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}