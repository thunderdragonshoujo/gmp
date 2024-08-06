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
      <div className="flex flex-wrap col-auto flex-shrink-0">
        {onScreenTiles.map((tile, index) => (
          <div key={index} className='px-auto shrink-0 max-w-fit'>
              <Image 
                src={tile} 
                alt={`tile-${index}`}
                width={400}
                height={400}
                onError={(e) => { (e.target as HTMLImageElement).src = "tile-mags.jpg"; }}
              />
          </div>
        ))}
      </div>
  );
};

export default MainGrid;

