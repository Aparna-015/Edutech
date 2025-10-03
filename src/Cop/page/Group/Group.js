import React from "react";
import tc from "../../../assets/img/tc.png";
import "./Group.css";

function Group() {
    const handleclick=()=>{
        window.open('https://web.whatsapp.com/','_blank');

    }
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tc} alt="" />
        </div>
        <div className="start-content">
          <h2 className="section-title">Join our  community</h2>
          <p>
            unlock the power of knowledge, which will bring you the opportunity
            to make a difference
          </p>

          <button className="register" onClick={handleclick}>Join now</button>
        </div>
      </div>
    </div>
  );
}

export default Group;
