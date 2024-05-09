import React from "react";
import "../styles/shop.css";
import ShopItem from "../components/shopItem";
import { Shopitem_goods } from "../entities/Shopitem_goods"
import Footer from "../components/footer";

export default function Shop() {
  const s_iteminfo1 = [
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
  ];

  const s_iteminfo2 = [
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
    new Shopitem_goods("../../assets/shop_temp.jpg", "Klubtrøje", "Størrelse", "xs s m l xl", "250 kr."),
  ];

  return (
    <div>
      <div className="shop_container">
      <h1 className="shop_intro">Klub butik</h1>
      <p className="shop_p">
        Vores klubtrøje, bat, træningsjakke mm. kan købes ved at skrive en mail
        til kasseren, og få den udleveret den kommende mandag
      </p>
      <h2 className="shop_category">Trænigstøj</h2>
      <div className="shop_goods">
        {s_iteminfo1.slice().map((x) => {
          return <ShopItem shop_item={x} />
        })}
      </div>
      <h2 className="shop_category">Bordtennisbat og diverse</h2>
      <div className="shop_goods">
        {s_iteminfo2.slice().map((x) => {
          return <ShopItem shop_item={x} />
        })}
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
