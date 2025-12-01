import './Header.css';
import logo from '../assets/logo.png';
import menuConfig from '../config/menuConfig';

function Header(){
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="logo" /></a>
                </div>
                <div className="menu">
                    <ul className="list">
                        {menuConfig.map((item) => (
                            <li key={item.id}><a href={item.link}>{item.label}</a></li>
                        ))}
                    </ul>
                </div>
                <a href="" className="hire-me">Hire Me</a>
                <span id="more">&#9776;</span>
                </nav>
        </header>
    )
}

export default Header;