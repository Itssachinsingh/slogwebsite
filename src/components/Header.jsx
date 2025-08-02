import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
// import "./AudiMegaMenu.css";
import megaData from "./menuData";
const menuData = {
    Courses: {
        "Computer Science": [
            "C Language",
            "Java",
            "C++", "Language",
            "Cyber", "security",
            "Machine", "Learning",
            "Web Designing",
            "Data Structure and Algorithms",
            "CCNP",
            "Cybersecurity : Pre-University Program",
            "Full Stack Web Development",
            "Python",
            "Cloud Computing",
            "Networking",
            "Artificial Intelligence",
            "CCNA"
        ],
        "Civil Tools": [
            "Revit",
            "SketchUp",
            "AutoCAD Civil",
            "ETABS",
            "3DsMax"
        ],
        "Mechanical Tools": [
            "AutoCAD Mech",
            "SolidWorks",
            "CATIA",
            "Ansys"
        ],
        "EE / EC": [
            " Internet of Things (IoT)",
            "Robotics",
            "Embedded Systems",
            "PLC SCADA"
        ],
        "Architecture": ["AutoCAD Architecture"],
        "Specialized": [
            "Digital Marketing",
            "CISSP",
            "Corporate Training",
            "Advance Excel"
        ]
    }
};


export const Header = ({ color }) => {

    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [activeCar, setActiveCar] = useState(megaData[0]);

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const submenuItems = menuData["Courses"];

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div className='header' style={{ 'color': color }}>
            <div className='logo_container'><Link to='/'><img src={Logo} alt="" /></Link></div>
            <nav className="navbar">
                <ul className="nav-items">
                    <Link to='/'> <li className="nav-item">Home</li></Link>
                    {/* <li
                        className="nav-item"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                        ref={menuRef}
                    >
                        Services

                        <div className={`mega_menu ${isOpen ? "show" : ""}`}>
                            <div className="column">
                                <h3>Computer Science</h3>
                                <a href="#">Python</a>
                                <a href="#">Java</a>
                                <a href="#">React</a>
                            </div>
                            <div className="column">
                                <h3>Mechanical</h3>
                                <a href="#">AutoCAD</a>
                                <a href="#">SolidWorks</a>
                                <a href="#">Ansys</a>
                            </div>
                            <div className="column">
                                <h3>Civil</h3>
                                <a href="#">SketchUp</a>
                                <a href="#">Revit</a>
                                <a href="#">Staad Pro</a>
                            </div>
                        </div>
                    </li> */}
                    <li>


                        <div className="">
                            <div
                                className="nav-item"
                                onMouseEnter={() => setShowMegaMenu(true)}
                                onMouseLeave={() => setShowMegaMenu(false)}
                            >
                                Services
                                {showMegaMenu && (
                                    <div className="mega-panel">
                                        <div className="left-menu">
                                            {megaData.map((car, index) => (
                                                <div
                                                    key={index}
                                                    className={`car-tab ${activeCar.name === car.name ? "active" : ""
                                                        }`}
                                                    onMouseEnter={() => setActiveCar(car)}
                                                >
                                                    {car.name}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="right-content">
                                            <div className="car-details">
                                                <h2>{activeCar.title}</h2>
                                                <p className="price">{activeCar.price}</p>
                                                <p><b>Emission:</b> {activeCar.specs.Emission}</p>
                                                <p><b>CO2:</b> {activeCar.specs.CO2}</p>
                                                <p><b>Top Speed:</b> {activeCar.specs.Speed}</p>
                                                <button className="enquire-btn">Enquire Now</button>
                                            </div>
                                            <div className="car-images">
                                                <img src={activeCar.images[0]} alt="main" className="main-img" />
                                                <div className="thumbs">
                                                    <img src={activeCar.images[1]} alt="interior" />
                                                    <img src={activeCar.images[2]} alt="back" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>



                    </li>
                    <div className="menu-container">
                        <ul className="main-menu">
                            {/* <Link to='/courses'> <li className="menu-item">
                                Courses
                                <div className="mega-menu">
                                    <div className="submenu">
                                        {Object.keys(submenuItems).map((item) => (
                                            <div
                                                className="submenu-item"
                                                key={item}
                                                onMouseEnter={() => setActiveSubmenu(item)}
                                                onMouseLeave={() => setActiveSubmenu(null)}
                                            >
                                                {item}  &emsp; &rang;
                                                {activeSubmenu === item && (
                                                    <div className="nested-menu">
                                                        {submenuItems[item].map((subitem) => (
                                                            <div className="nested-item" key={subitem}>
                                                                {subitem}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li></Link> */}
                            <li className="nav-item">
                                <Link to='/mentors'>Mentors</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/contact'><li className="nav-item">Contact</li></Link>
                    <Link to='/about-us'><li className="nav-item">About us</li></Link>

                </ul>
            </nav>
            <div>
                <ul className='side_menu'>
                    <button> <Link to='/login'>Login / Sign Up</Link></button>
                    <p className="nav-item">Enquiry</p>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
