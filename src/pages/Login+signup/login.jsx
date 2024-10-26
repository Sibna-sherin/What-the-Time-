import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'; // Import your CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            alert(response.data.message); // Display success message
        } catch (error) {
            alert('Error logging in');
        }
    };

    // Use effect to include the p5.js script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js";
        script.async = true;
        document.body.appendChild(script);

        const loginAnimationScript = document.createElement('script');
        loginAnimationScript.src = "login-animation.js"; // Your animation file
        loginAnimationScript.async = true;
        document.body.appendChild(loginAnimationScript);

        return () => {
            document.body.removeChild(script);
            document.body.removeChild(loginAnimationScript);
        };
    }, []);

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
