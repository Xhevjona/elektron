import React, { useState, useRef } from "react";
import "../Styles/Contact.scss";
import Address from "../Image/address.png";
import Phone from "../Image/phone.png";
import Email from "../Image/email.png";
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
import emailjs from "@emailjs/browser";
import AOS from 'aos';
import 'aos/dist/aos.css';

// mapboxgl.accessToken =
//   "pk.eyJ1IjoieGhldmpvbmEiLCJhIjoiY2wxZG1mdDVhMGJqYjNjbjNuMWpkaXpoNSJ9.Gxfz4SZeyv-KDE56SVtJJQ";

const Contact = () => {
  
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

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-0.1275);
  // const [lat, setLat] = useState(51.50722);
  // const [zoom, setZoom] = useState(12);

  // useEffect(() => {
  //   if (map.current) return;
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/dark-v10",
  //     center: [lng, lat],
  //     attributionControl: false,
  //     zoom: zoom,
  //   });
  //   const marker = new mapboxgl.Marker({ color: "gold" })
  //     .setLngLat([-0.1275, 51.50722])
  //     .addTo(map.current);
  // });
  // useEffect(() => {
  //   if (!map.current) return;
  //   map.current.on("move", () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  return (
    <div>
      <div className="contact-bg">
        <h2>Contact Us</h2>
      </div>
      <div className="why-us">
        <h2 data-aos="fade-right" data-aos-delay="400">Why Us?</h2>
        <div className="line" data-aos="fade-right" data-aos-delay="600">
          <hr />
        </div>
        <p data-aos="fade-right" data-aos-delay="800">
          Our company stands out from the rest with our commitment to
          exceptional quality and service, attention to detail, and expertise in
          the latest technologies and trends in the industry.Choose
          us for your electrical needs and experience the difference that our
          professionalism and dedication can make.
        </p>
      </div>

      <div className="contact-info">
        {/* <div className="contact-title">
          <h2>Get in touch with us!</h2>
        </div> */}
        <div className="block1">
          <div className="contact-overlay">
            <img src={Address} alt="location" height={80} width={80} />
            <h4>Address</h4>
            <p>London,UK</p>
          </div>
        </div>
        <div className="block2">
          <div className="contact-overlay">
            <img src={Phone} alt="mobile" height={80} width={80} />
            <h4>Phone</h4>
            <p>+44 123 45678</p>
          </div>
        </div>
        <div className="block3">
          <div className="contact-overlay">
            <img src={Email} alt="mail" height={80} width={80} />
            <h4>Email</h4>
            <p>info@gmail.com</p>
          </div>
        </div>
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
          <div className="feedback">
            {" "}
            {errors.name && <p>{errors.name}</p>}{" "}
          </div>
          <div className="form-email">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              className="form-email"
              placeholder="Email"
              tabIndex="2"
            />
          </div>
          <div className="feedback">
            {" "}
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="subject">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="firstName"
              tabIndex="3"
              placeholder="Subject"
            />
          </div>
          <div className="feedback">
            {" "}
            {errors.subject && <p>{errors.subject}</p>}
          </div>
          <div className="message">
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="message"
              name="message"
            />
          </div>
          <div className="feedback">
            {" "}
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
{/* 
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" /> */}
    </div>
  );
};

export default Contact;
