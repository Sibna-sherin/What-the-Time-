import React, { useEffect } from 'react';
import './loading.css';

const Loading = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
    script.async = true;
    document.body.appendChild(script);

    const animationScript = document.createElement('script');
    animationScript.src = "/loading-animation.js"; // Adjust path
    animationScript.async = true;
    document.body.appendChild(animationScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(animationScript);
    };
  }, []);

  return (
    <div className="loading-text">Loading...</div>
  );
};

export default Loading;
