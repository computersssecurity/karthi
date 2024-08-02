import React from 'react';
import './AccesoriesHomepage.css'; // Make sure to create this CSS file

function AccesoriesHomepage() {
  const images = [
    { src: 'assets/royal.jpeg', title: 'RoyalEnfield Helmets' },
    { src: 'assets/agv.jpeg', title: 'AGV Helmets' },
    { src: 'assets/Studds-1.jpeg', title: 'STUDDS Helmets' },
    { src: 'assets/Axor.jpeg', title: 'AXOR Helmets' },
    { src: 'assets/smk white.jpg', title: 'SMK Helmets' },
    { src: 'assets/vega.jpeg', title: 'VEGA Helmets' },
    { src: 'assets/Jackets.jpeg', title: 'Riding Jackets' },
    { src: 'assets/Gloves.jpeg', title: 'Riding Gloves' },
    { src: 'assets/Boot.jpeg', title: 'Riding Boots' },
  ];

  const handleCardClick = (index) => {
    console.log(`Clicked card ${index + 1}`);
    // Add your desired functionality here
  };

  return (
    <div className="card-grid">
      {images.map((image, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <img src={image.src} alt={`Card${index + 1}`} />
          <div className="card-title">{image.title}</div>
        </div>
      ))}
    </div>
  );
}

export default AccesoriesHomepage;
