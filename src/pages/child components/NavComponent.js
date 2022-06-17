import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'; 
import { Link as RLink } from "react-router-dom"; 
import { Link } from "react-scroll"; 
import '../../css/portion/nav.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCaretLeft, faCaretRight, faAngleDown, faX } from '@fortawesome/free-solid-svg-icons'; 

function NavComponent(props) {

    //useRef 
    const navAnim = useRef(null); 

    //useState 
    const [showNav, setShowNav] = useState(false); 

    //usEffect 
    useEffect(() => { 
        if (props.animBool) {
            gsap.fromTo(navAnim.current, {opacity: 0, y: -35}, {opacity: 1, y: 0, duration: 0.75, delay: 2.5})
        }
    }, [navAnim, props.animBool]); 

    //function 
    const handleNavClick = () => {
        if (showNav) {
            setShowNav(false); 
        } 

        else {
            setShowNav(true); 
        }
    }; 

    return (
        <div>
            <div className="back-shade-z-index-2" style={{display: showNav ? 'flex' : 'none'}}></div>
            {
                !props.searchBool ? 

                    <nav className="nav-container" ref={navAnim}>

                        <div className="nav-text">
                            <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
                                Cars
                            </Link>
                        </div>
                        
                        <div className="nav-text">
                            <RLink to="/Cudil-Car/Cars">
                                Customize
                            </RLink>
                        </div>

                        <div className="middle-text">
                            <RLink to="/Cudil-Car/">
                                Cudil
                            </RLink>
                        </div>

                        <div className="nav-text">
                            <Link activeClass="active" to="news" spy={true} smooth={true} duration={500}>
                                News
                            </Link>
                        </div>

                        <div>
                            <button className="nav-button" onClick={handleNavClick}>
                                {
                                    showNav ? 

                                        <div className="nav-button-container">
                                            <FontAwesomeIcon icon={faX} style={{width: '13px', height: 'auto', color: 'rgb(50, 50, 50)'}} /> 
                                        </div> 

                                    : 

                                        <div className="nav-button-container">
                                            <div className="nav-button-rec"></div>
                                            <div className="nav-button-rec"></div>
                                            <div className="nav-button-rec"></div>
                                        </div> 
                                } 
                            </button>
                            <RLink to="/Cudil-Car/Cars">
                                <div className="create-car-div" style={{display: showNav ? 'flex' : 'none'}}>Create your own car</div>
                            </RLink>
                        </div>

                    </nav>

                : 

                    <nav className="nav-container" ref={navAnim} style={{justifyContent: 'space-between'}}>

                        <div className="middle-text" style={{width: '65%'}}>
                            <RLink to="/Cudil-Car">
                                Cudil
                            </RLink>

                             <input placeholder='Search car (color, model, etc.)' /> 
                        </div>

                        <button className="nav-button">
                            <div className="nav-button-container">
                                <div className="nav-button-rec"></div>
                                <div className="nav-button-rec"></div>
                                <div className="nav-button-rec"></div>
                            </div>
                        </button>

                    </nav> 
            }
            
        </div>
    )
}

export default NavComponent
