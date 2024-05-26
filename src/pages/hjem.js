import React, { useEffect } from "react";
import "../styles/index.css";
import "../styles/hjem.css";
import Hero from "../components/hero";
import Sponsor from "../components/sponsor";
import Footer from "../components/footer";
import Header from "../components/header";
import Important_news from "../components/important_news";
import Section3_ungdom from "../components/section3/section3_ungdom";
import Section3_60plus from "../components/section3/section3_60plus";
import Section3_senior from "../components/section3/section3_senior";
import Contact from "../components/contact";
import { useUser } from "@supabase/auth-helpers-react";


export default function Hjem() {

    // const { user, isLoading, error } = useUser();

    // useEffect(() => {
    //   console.log('user:', user);
    //   console.log('isLoading:', isLoading);
    //   console.log('error:', error);
    // }, [user, isLoading, error]);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error.message}</div>;
  //   return (
  //     <div>
  //       {user ? <div>Welcome, {user.email}</div> : <div>Not logged in</div>}
  //     </div>
  //   );
  // };

  return (
    <>
    <Header></Header>
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
          <Section3_ungdom></Section3_ungdom>
          <Section3_60plus></Section3_60plus>
          <Section3_senior></Section3_senior>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
