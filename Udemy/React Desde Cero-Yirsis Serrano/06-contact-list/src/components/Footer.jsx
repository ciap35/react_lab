import React from 'react';
import '../stylesheets/footer.css';  // Create this file for custom styles

const Footer = () => {
    return (
        <footer className="footer">
        <p>
            &copy; {new Date().getFullYear()} 
            <a href="https://www.linkedin.com/in/carlos-ignacio-aguilera-patalano-9a967733/" target="_blank" rel="noopener noreferrer">
                Carlos Ignacio Aguilera Patalano
            </a>
            <br/>
                Licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.
        </p>
    </footer>
    );
}

export default Footer;