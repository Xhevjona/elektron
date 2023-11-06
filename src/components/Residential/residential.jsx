import React from "react";
import "../Styles/Residential.scss";
import Residential1 from "../Image/residential1.jpg";
import Residential2 from "../Image/residential2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const residential = () => {

  AOS.init({
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    mirror: false,
    once: true,
  });
 
  return (
    <div>
      <div className="residential-bg">
        <button>Residential Services</button>
      </div>

      <div className="residential-desc">
        <h2 data-aos="fade-right" data-aos-delay="300">We Offer</h2>
        <p data-aos="fade-right" data-aos-delay="400">
          Our company offers a wide range of residential services,
          including installation, repair, and maintenance of electrical systems.
          We understand the importance of keeping your home safe and functional,
          which is why our team of experts is committed to delivering
          exceptional quality and service. From simple repairs to complex
          installations, we have the knowledge and expertise to ensure that your
          home's electrical systems are running smoothly and efficiently.
        </p>
      </div>
      <div className="list11">
        <img src={Residential2} alt="list" width={400} height={300} />
        <div className="wrapper11" data-aos="fade-left" data-aos-delay="500">
          <p>
            Electrical safety inspections
            <br />
            House Rewiring & Wiring Repairs
            <br /> Outlet Wiring, Repair Replacement, & Installation
            <br /> Circuit Breaker/Fuse Box Repair
            <br />
            Landscape Lighting
            <br /> Electrical & Short Circuit Repair
            <br /> Lighting Systems & Controls
            <br /> Surge Protectors
          </p>
        </div>
      </div>

      <div className="list22">
        <div className="wrapper22" data-aos="fade-right" data-aos-delay="500">
          <p>
            EV Charging Stations Smart Home & IOT Installation
            <br />
            Flat Screen TV & Home Cinema Installation
            <br />
            Electrical Troubleshooting & Repair
            <br />
            Ceiling Fan Installation
            <br />
            Video Surveillance
            <br />
            Electrical Panel Replacement Repair
            <br />
            Motion Sensors
          </p>
        </div>
        <img src={Residential1} alt="list" width={400} height={300} />
      </div>
    </div>
  );
};

export default residential;
