import React from "react";
import "./Home.css";
import meta from "../../../assets/img/meta.jpeg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Courses from "../Courses/Courses";
import Group from "../Group/Group";
import Plans from "../Plans/Plans";

function Home() {

    const handleclick=()=>{
        window.open('https://www.youtube.com/','_blank');

    }

  return (
    <> 
    <section>
      <div className="container">
        <div className="home_container">
          <div className="home_content">
            <h2 className="section-title">Learn anything for free</h2>
            <p>Unlocking Potential through Smart Learning Solutions</p>
            <div className="home-btns">
              <button className="register-btn get-started-btn" onClick={handleclick}>Get start</button>
              <button className="register-btn watch-now-btn">Watch now</button>
            </div>
          </div>
          <div className="home-side-content">
            <div className="box-img">
              <img src={meta} alt="Meta" />
            </div>
            <div className="whatsapp-container">
              <h3>500+ students</h3>
              <AiOutlineWhatsApp color="green" size="2rem" />
            </div>
            <div className="support">
              <h4>Active support</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Courses/>
    <Group/>
    <Plans/>
    
    </>
  );
}

export default Home;
