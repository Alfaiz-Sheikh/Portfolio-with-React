import "./Footer.css"
import logo from '../assets/logo.png';

function Footer() {
    return(
        <footer>
            <img src={logo} className="footer-logo"/>
            <ul className="footer-links">
                <a href="#service-sec"><li>Services</li></a>
                <a href="#project-sec"><li>Works</li></a>
                <a href="#resume"><li>Experience</li></a>
                <a href="#about-sec"><li>Blog</li></a>
            </ul>
            <p>©2025 All Rights Reserved by Alfaiz Sheikh</p>
        </footer>
    )
}

export default Footer;