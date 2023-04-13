import React from "react";
import "../Styles/Commercial.scss";
import Commercial1 from "../Image/commercial1.jpg";
import Commercial2 from "../Image/commercial2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const commercial = () => {

  AOS.init({
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    mirror: false,
    once: true,
  });

  return (
    <div>
      <div className="commercial-bg">
        <button>Commercial Services</button>
      </div>
      <div className="commercial-desc">
        <h2 data-aos="fade-right" data-aos-delay="400">We Offer</h2>
        <p data-aos="fade-right" data-aos-delay="400">
          Our company specializes in providing commercial services,
          including installation, repair, and maintenance of electrical systems
          for businesses and organizations. We understand the importance of
          minimizing downtime and maximizing productivity, which is why we offer
          fast, efficient, and reliable service to meet your needs. Our team of
          experts has the knowledge and expertise to handle even the most
          complex commercial projects, ensuring that your electrical systems are
          running smoothly and safely at all times.
        </p>
      </div>
      <div className="list1">
        <img src={Commercial2} alt="list" width={400} height={300} />
        <div className="wrapper1" data-aos="fade-left" data-aos-delay="500">
          <p>
            Maintenance & Repair
            <br />
            Troubleshooting
            <br />
            Conduit Runs
            <br />
            Security Camera Installation
            <br />
            Security Lighting
            <br />
            Emergency Power & Lighting
            <br />
            Voice Wiring, Data Wiring, Fiber Wiring
            <br />
            Voice & Data Systems
            <br />
            Outdoor Lighting
            <br />
            Patio Heaters
            <br />
            Cable Fault Locating
          </p>
        </div>
      </div>
      <div className="list2">
        <div className="wrapper2" data-aos="fade-right" data-aos-delay="500">
          <p>
            Amp Service & Upgrade
            <br />
            100 – 2000 Amp Service Installation
            <br />
            Circuit Breakers
            <br />
            Control Panels
            <br />
            Electrical Boxes
            <br />
            Junction Boxes
            <br />
            Lighting Update Analysis/Service
            <br />
            Indoor Lighting
            <br />
            Recessed Lighting
            <br />
            Electrical Service
            <br />
            Underground Wiring
          </p>
        </div>
        <img src={Commercial1} alt="list" width={400} height={300} />
      </div>
    </div>
  );
};

export default commercial;
