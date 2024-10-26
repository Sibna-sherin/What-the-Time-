// src/components/Loading.js
import React, { useEffect } from 'react';
import p5 from 'p5';
import '../styles/loading.css';

const Loading = () => {
  useEffect(() => {
    const sketch = (p) => {
      let rippleRadius = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noFill();
        p.stroke(255, 150); // White color with transparency
        p.strokeWeight(2);
      };

      p.draw = () => {
        p.background(0, 0, 0, 25); // Faint background fade for ripple effect
        rippleRadius += 2;
        if (rippleRadius > p.width) {
          rippleRadius = 0;
        }
        p.ellipse(p.width / 2, p.height / 2, rippleRadius, rippleRadius);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch);
    return () => {
      myP5.remove(); // Clean up when component unmounts
    };
  }, []);

  return <div className="loading-text">Loading...</div>;
};

export default Loading;
