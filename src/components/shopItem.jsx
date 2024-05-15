import React from "react";

export default function ShopItem({shop_item}) {
  return (
    <div className="shop-card">
      <img src={shop_item.image} alt="" />
      <div className="shop-info">
        <h2 className="s_name">{shop_item.name}</h2>
        <div>
          <p className="exp1">{shop_item.exp1}</p>
        </div>
        <div>
          <p className="exp2">{shop_item.exp2}</p>
        </div>
        <div>
          <p className="price">{shop_item.price}</p>
        </div>
      </div>
    </div>
  );
}
