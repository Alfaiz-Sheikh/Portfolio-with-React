import './Header.css';
import logo from '../assets/logo.png';

function Header(){
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <div className="menu">
                    <ul className="list">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#service-sec">Services</a></li>
                        <li><a href="#about-sec">About me</a></li>
                        <li><a href="#">Protfolio</a></li>
                        <li><a href="#">Contact me</a></li>
                    </ul>
                </div>
                <a href="" className="hire-me">Hire Me</a>
                <span id="more">&#9776;</span>
                </nav>
        </header>
    )
}

export default Header;