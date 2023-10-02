import React from 'react'
import './header.css';
import img from '../images/img1.png';
import logo from '../images/logo.png';
import { Link } from "react-scroll";


const Header = ({id}) => {
    return (

        <div className="hero-container" id="home">

            <nav>
                <img src={logo} alt='h' />

                <ul>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0} // Adjust the offset as needed
                            duration={500}
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={20} // Adjust the offset as needed
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0} // Adjust the offset as needed
                            duration={500}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contacts"
                            spy={true}
                            smooth={true}
                            offset={0} // Adjust the offset as needed
                            duration={500}
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>


            </nav>

            <div className="hero">
                <div className="content">
                    <h2>Coder</h2>
                    <img src={img} alt='h' />
                    <h2>Hitesh</h2>
                </div>
            </div>

            <p
                style={{

                    position: 'fixed',
                    bottom: 0,
                    right: '10px',
                    borderRadius: '10px 10px 0px 0px',
                    padding: '10px',
                    background: '#242832',
                    color: '#b803f0',
                    zIndex: 100,
                }}
            >

                &hearts; Hitesh Saini

            </p>
            <span>
            {'< FullStack Developer/>'}
            </span>

        </div>
    )
}

export default Header
