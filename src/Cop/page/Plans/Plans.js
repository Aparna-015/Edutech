import React from "react";
import './Plans.css'

function Plans() {
  const priceData = [
    {
      title: "Regular",
      price: "28",
      duration: "/month",
      color: "#ffff",
      features: ["Unlimited access", "Customer support", ],
    },
    {
      title: "Premium",
      price: "58",
      duration: "/month",
      color: "#8c3e86",
      features: ["Unlimited access", "Customer support"],
    },
    {
      title: "Basic",
      price: "28",
      duration: "/month",
      color: "#ffff",
      features: ["Unlimited access", "Customer support"],
    },
    {
      title: "Standard",
      price: "28",
      duration: "/month",
      color: "#ffff",
      features: ["Unlimited access", "Customer support"],
    },
  ];


  return (
    <div className="container">
      <div className="pricing-top">
        <h2 className="section-title">Premium pricing plans</h2>
        <p>
          Unlock the services premium price plan & soar ahead of competition
        </p>
      </div>

      <div className="pricing-wrapper">
        {priceData.map((data, i) => (
          <div className="price_item" key={i}>
            <div className="pric_card_top" style={{ backgroundColor: data.color }}>
              <h2 className="section-title">{data.title}</h2>
              <h2 className="price-section-title">
                {data.price}
                <span>{data.duration}</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                {data.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="register">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
