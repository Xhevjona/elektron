import React from "react";
import "../Styles/About.scss";
import About1 from "../Image/about1.jpg";
import About2 from "../Image/about2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  AOS.init({
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    mirror: false,
    once: true,
  });

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  return (
    <div>
      <div className="about-bg">
        <h2>About Us</h2>
      </div>
      <div className="abt-section">
        <div className="img-container">
          <img
            src={About1}
            width={280}
            height={400}
            alt="info"
            className="image1"
          />
          <img src={About2} width={280} height={400} alt="info" />
        </div>
        <div className="text-container">
          <h1 data-aos="fade-left" data-aos-delay="400">Our Story</h1>
          <p data-aos="fade-left" data-aos-delay="600">
            LOGO was founded with the belief that exceptional quality and
            service are the key to success. With a passion for electrical
            systems and a commitment to professionalism and expertise, we set
            out to provide a wide range of services to residential, commercial,
            and industrial clients. Over the years, we have built a reputation
            for delivering exceptional quality and service, earning the trust of
            our clients and establishing ourselves as a leader in the industry.
            Our story is one of dedication, hard work, and a commitment to
            excellence, and we look forward to continuing to serve our clients
            with the same level of passion and expertise for years to come.
          </p>
        </div>
      </div>
      <div className="mission-container">
        <div className="mission">
          <h1 data-aos="fade-right" data-aos-delay="400">Our Mission</h1>
          <p data-aos="fade-right" data-aos-delay="600">
            Our mission is to provide exceptional quality and service to our
            clients, delivering innovative solutions and exceeding their
            expectations. We are committed to professionalism, expertise, and
            attention to detail, ensuring that every project is completed to the
            highest standard.We strive to continuously improve and innovate,
            staying at the forefront of the latest technologies and trends in
            the electrical industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
