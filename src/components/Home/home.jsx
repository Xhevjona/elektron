import React, { useRef, useState} from "react";
import "../Styles/Home.scss";
import Logo from "../Image/logo.jpg";
import Residential from "../Image/residential.jpg";
import Commercial from "../Image/commercial.jpg";
import About from "../Image/about.jpg";
import Project12 from "../Image/project12.jpeg";
import Project5 from "../Image/project5.jpeg";
import Project14 from "../Image/project14.jpeg";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';

 
const Home = () => {

    AOS.init({
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      mirror: false,
      once: true,
    });

  
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_cle6h3x",
          "template_y7mt1pd",
          e.target,
          "JRwxi7mWdOU58RcWY"
        )
        .then(
          (result) => {
            setIsSentSuccessfully(true);
          //   console.log(result.text);
            setFormData({ name: "", email: "", subject: "", message: "" });
           },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {}; 
    if (!formData.name.trim()) {
      isValid = false;
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      isValid = false;
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      isValid = false;
      errors.message = "Message is required";
    }
    setErrors(errors);
    return isValid;
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="wrapper">
        <div className="home">
          <div className="logo" data-aos="fade-right" data-aos-delay="400">
            <h1>LOGO</h1>
          </div>
          <div className="slogan" data-aos="fade-right" data-aos-delay="800">
            <h2>Creating modern luxury through lighting</h2>
          </div>
          <div className="subs" data-aos="fade-right" data-aos-delay="1000">
            <p>
              Experience the power of light and luxury with our exceptional
              quality and design, ensuring your complete satisfaction every step
              of the way
            </p>
          </div>
          <div className="home-btn" data-aos="fade-right" data-aos-delay="1200">
            <Link to="/contact-us">
              <button onClick={scrollToTop}>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={Logo} alt="logo" width={450} height={550} />
        </div>
      </div>

      <div className="service-container">
        <div className="service-text">
          <h2 data-aos="fade-right" data-aos-delay="400">Our Services</h2>
          <p data-aos="fade-right" data-aos-delay="600">
            We provide a wide range of services including installation, repair,
            and maintenance of electrical systems for residential and commercial
            properties. From simple repairs to complex installations, we have
            the knowledge and experience to get the job done right the first
            time.
          </p>
        </div>
        <div className="residential-services">
          <Link to="residential-services">
            <img
              src={Residential}
              width={300}
              height={350}
              alt="service"
              onClick={scrollToTop}
            />
          </Link>
          <div className="overlay">
            <Link to="residential-services">
              <h2 onClick={scrollToTop}>Residential Services</h2>
            </Link>
          </div>
        </div>
        <div className="commercial-services">
          <Link to="commercial-services">
            <img
              src={Commercial}
              width={300}
              height={350}
              alt="service"
              onClick={scrollToTop}
            />
          </Link>
          <div className="overlay">
            <Link to="/commercial-services">
              <h2 onClick={scrollToTop}>Commercial Services</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="about-container">
        <img src={About} alt="about" width={400} height={270} />
        <div className="about-text" data-aos="fade-left" data-aos-delay="400">
          <h2>Luxury Lighting That Brings A Touch Of Elegance To Your Space</h2>
          <p data-aos="fade-left" data-aos-delay="600">
            LOGO is dedicated to providing exceptional quality and service to
            residential and commercial clients.Our goal is to ensure that every
            client's needs are met with precision and efficiency, ensuring their
            complete satisfaction every step of the way.
          </p>
          <div className="about-bttn" data-aos="fade-left" data-aos-delay="800">
            <Link to="about">
              <button onClick={scrollToTop}>About Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="projects-text">
          <h2 data-aos="fade-right" data-aos-delay="400">Our Projects</h2>
          <p data-aos="fade-right" data-aos-delay="600">
            LOGO has successfully completed a variety of residential and
            commercial projects, ranging from small repairs to large-scale
            installations. Whether it's a residential or commercial project, we
            have the knowledge and expertise to get the job done right.
          </p>
          <div className="projects-bttn" data-aos="fade-right" data-aos-delay="800">
            <Link to="projects">
              <button onClick={scrollToTop}>See All</button>
            </Link>
          </div>
        </div>
        <img src={Project12} alt="projects" width={330} height={370} className="first" />
        <img src={Project5} alt="projects" width={310} height={370} className="second"/>
        <img src={Project14} alt="projects" width={310} height={370}  className="third"/>
      </div>
      <div className="title">
        <h2>Contact Us</h2>
        <div className="line">
          <hr />
        </div>
      </div>
      <div className="form-text">
        <h5>
          FOR MORE INFORMATION ABOUT OUR SERVICES OR TO SET UP A FREE INSTANT
          QUOTE,PLEASE DO NOT HESITATE TO SEND US A MESSAGE.
        </h5>
      </div>
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="name">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="firstName"
              tabIndex="1"
              placeholder="Name"
            />
          </div>
          <div className="feedback">{errors.name && <p>{errors.name}</p>} </div>

          <div className="form-email">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-email"
              placeholder="Email"
              tabIndex="2"
            />
          </div>
          <div className="feedback">
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="subject">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="subject"
              tabIndex="3"
              placeholder="Subject"
            />
          </div>
          <div className="feedback">
            {errors.subject && <p>{errors.subject}</p>}
          </div>
          <div className="message">
            <textarea
              placeholder="Message"
              className="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <div className="feedback">
            {errors.message && <p>{errors.message}</p>}
          </div>

          <button type="submit" className="send">
            Send Message
          </button>
        </form>
      </div>

      {isSentSuccessfully && (
        <div className="success-message">
          <p> Form submitted successfully!</p>
          </div> 

      )}
    </div>
  );
};

export default Home;
