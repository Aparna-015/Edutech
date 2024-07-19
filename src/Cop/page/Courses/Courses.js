import React from "react";
import "./Courses.css";
import ai from "../../../assets/img/ai.png";
import dg from "../../../assets/img/dg.png";
import hack from "../../../assets/img/hacking.png";
import sd from "../../../assets/img/sd.png";


function Courses() {
  const courseData = [
    {
      title: "AI Development",
      desc: "Master in development",
      img: ai,
    },
    {
      title: "Digital Marketing",
      desc: "Master in digital marketing",
      img: dg,
    },
    {
      title: "Cyber Security",
      desc: "Master in cyber security",
      img: hack,
    },
    {
      title: "Software Development",
      desc: "Master in software development",
      img: sd,
    },
  ];

  return (
    <div className="course-container">
      <div className="course-top">
        <h2 className="section-title">Our Courses</h2>
        <p>Top trending courses</p>
        <div className="course_wrapper">
          {courseData.map((data, i) => (
            <div key={i} className="course-item">
              <span className="course-icon">
                <img src={data.img} alt={data.title} />
              </span>
              <div className="course-content">
                <h4>{data.title}</h4>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
