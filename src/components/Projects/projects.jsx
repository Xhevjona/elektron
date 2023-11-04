import React, { useState } from "react";
import "../Styles/Projects.scss";
import Project1 from "../Image/project1.jpeg";
import Project2 from "../Image/project2.jpeg";
// import Project3 from "../Image/project3.jpg";
import Project4 from "../Image/project4.jpeg";
import Project5 from "../Image/project5.jpeg";
import Project6 from "../Image/project6.jpeg";
import Project7 from "../Image/project7.jpeg";
import Project8 from "../Image/project8.jpeg";
import Project9 from "../Image/project9.jpeg";
import Project10 from "../Image/project10.jpeg";
import Project11 from "../Image/project11.jpeg";
import Project12 from "../Image/project12.jpeg";
import Project13 from "../Image/project13.jpeg";
import Project14 from "../Image/project14.jpeg";
import Project15 from "../Image/project15.jpeg";
import Project16 from "../Image/project16.jpeg";
import Project17 from "../Image/project17.jpeg";
import Project18 from "../Image/project18.jpg";
// import Project19 from "../Image/project19.jpg";
const Projects = () => {
  const images = [
    {
      id: 1,
      src: Project1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: Project2,
      alt: "Image 2",
    },
    // {
    //   id: 3,
    //   src: Project3,
    //   alt: "Image 3",
    // },
    {
      id: 4,
      src: Project4,
      alt: "Image 4",
    },
    {
      id: 5,
      src: Project5,
      alt: "Image 5",
    },
    {
      id: 6,
      src: Project6,
      alt: "Image 6",
    },
    {
      id: 7,
      src: Project7,
      alt: "Image 7",
    },
    {
      id: 8,
      src: Project8,
      alt: "Image 8",
    },
    {
      id: 9,
      src: Project9,
      alt: "Image 9",
    },
    {
      id: 10,
      src: Project10,
      alt: "Image 10",
    },
    {
      id: 11,
      src: Project11,
      alt: "Image 11",
    },
    {
      id: 12,
      src: Project12,
      alt: "Image 12",
    },
    {
      id: 13,
      src: Project13,
      alt: "Image 13",
    },
    {
      id: 14,
      src: Project14,
      alt: "Image 14",
    },
    {
      id: 15,
      src: Project15,
      alt: "Image 15",
    },
    {
      id: 16,
      src: Project16,
      alt: "Image 16",
    },
    {
      id: 17,
      src: Project17,
      alt: "Image 17",
    },
    {
      id: 18,
      src: Project18,
      alt: "Image 18",
    },
    // {
    //   id: 19,
    //   src: Project19,
    //   alt: "Image 19",
    // },
  ];
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image.src);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setShowPopup(false);
  };

  const [displayCount, setDisplayCount] = useState(4); // Show 4 images by default

  const handleShowMore = () => {
    setDisplayCount(displayCount + 4); // Increase the display count by 4
  };

  const handleShowLess = () => {
    setDisplayCount(displayCount - 16); // Decrease the display count by 16
  };

  return (
    <div>
      <div className="projects-bg">
        <h2>Projects</h2>
      </div>
      <div className="projects-desc">
        <p>
          Explore our projects page and discover our expertise in installations
          for residential and commercial properties, and trust us to meet your
          electrical needs with precision and efficiency.
        </p>
      </div>

      <div className="main">
        {images.slice(0, displayCount).map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            onClick={() => openPopup(image)}
          />
        ))}
      </div>
      {showPopup && (
        <div className="popup">
          <img
            className="popup-image"
            src={selectedImage}
            alt="Selected"
            onClick={closePopup}
          />
          <button className="close-button" onClick={closePopup}>
            &times;
          </button>
        </div>
      )}
      <div className="projects-btn">
        {displayCount < images.length && (
          <button onClick={handleShowMore}>Show More</button>
        )}
        {displayCount > 18 && (
          <button onClick={handleShowLess}>Show Less</button>
        )}
      </div>
    </div>
  );
};

export default Projects;
