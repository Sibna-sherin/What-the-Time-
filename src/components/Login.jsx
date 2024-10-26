import React, { useEffect } from 'react';
import './login.css';

const Login = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
    script.async = true;
    document.body.appendChild(script);

    const animationScript = document.createElement('script');
    animationScript.src = "C:\Users\sibna\What-the-Time-\public\loading-animation.js"; // Adjust path
    animationScript.async = true;
    document.body.appendChild(animationScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(animationScript);
    };
  }, []);

  return (
    <div>
      <h2>Login to the Time Machine</h2>
      {/* Form for login (could be added here) */}
    </div>
  );
};

export default Login;
