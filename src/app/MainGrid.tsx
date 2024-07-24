import React, { useState, useEffect } from 'react';
import './MainFlex.css';
import Image from "next/image";

function getRandInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

const MainGrid = () => {
  const [onScreenTiles, setOnScreenTiles] = useState([
    "/tile-mags.jpg",
    "/tile-caps.jpg",
    "/tile-diodes.jpg",
    "/tile-fuses.jpg",
    "/tile-switches.jpg",
    "/tile-tstats.jpg",
  ]);

  const [offScreenTiles, setOffScreenTiles] = useState([
    "/tile-mags.jpg",
    "/tile-caps.jpg",
    "/tile-diodes.jpg",
    "/tile-fuses.jpg",
    "/tile-switches.jpg",
    "/tile-tstats.jpg",
  ]);

  const swapTile = () => {
    let idxA = getRandInt(onScreenTiles.length);
    let idxB = getRandInt(offScreenTiles.length);

    setOnScreenTiles(prev => {
      const newOnScreenTiles = [...prev];
      newOnScreenTiles[idxA] = offScreenTiles[idxB];
      return newOnScreenTiles;
    });

    setOffScreenTiles(prev => {
      const newOffScreenTiles = [...prev];
      newOffScreenTiles[idxB] = onScreenTiles[idxA];
      return newOffScreenTiles;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => swapTile(), 800);
    return () => clearInterval(interval);
  }, [onScreenTiles, offScreenTiles]);

  return (
    <div style={{ background: "#0033cc", height: "100vh" }}>
      <ul className="main-grid">
        {onScreenTiles.map((tile, index) => (
          <li key={index}>
            <div className="image-container">
              <Image 
                src={tile} 
                alt={`tile-${index}`}
                fill
                style={{ objectFit: "cover" }}
                onError={(e) => { e.target.src = "tile-mags.jpg"; }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainGrid;

