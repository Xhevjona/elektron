import React, { useState } from "react";
import "../Styles/Projects.scss";
import Project1 from "../Image/project1.jpg";
import Project2 from "../Image/project2.jpg";
import Project3 from "../Image/project3.jpg";
import Project4 from "../Image/project4.jpeg";
import Project5 from "../Image/project5.jpeg";
import Project6 from "../Image/project6.jpeg";
import Project7 from "../Image/project7.jpeg";

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
    {
      id: 3,
      src: Project3,
      alt: "Image 3",
    },
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
  ];

  const [displayCount, setDisplayCount] = useState(4); // Show 4 images by default

  const handleShowMore = () => {
    setDisplayCount(displayCount + 4); // Increase the display count by 4
  };

  const handleShowLess = () => {
    setDisplayCount(displayCount - 4); // Decrease the display count by 4
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
          <img key={image.id} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="projects-btn">
        {displayCount < images.length && (
          <button onClick={handleShowMore}>Show More</button>
        )}
        {displayCount > 4 && (
          <button onClick={handleShowLess}>Show Less</button>
        )}
      </div>
    </div>
  );
};

export default Projects;
