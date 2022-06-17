import React, { useEffect, useRef, useState } from 'react'
import NavComponent from './child components/NavComponent'; 
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import Carousel from 'react-elastic-carousel'; 
import { Link } from "react-scroll"; 
import axios from 'axios'; 
import { Link as RLink } from "react-router-dom";
import FooterComponent from './child components/FooterComponent'; 
import '../css/main.scss'; 
import dreamred from '../images/dream2/red.png'; 
import dreamblack from '../images/dream2/black.png'; 
import dreamtan from '../images/dream2/tan.png'; 
import carbackground from '../images/miscellaneous/car-background.jpeg'; 

gsap.registerPlugin(ScrollTrigger); 

const NewsComp = () => { 

    //useState 
    const [data, setData] = useState(); 

    useEffect(() => { 
        axios.get("https://api.spaceflightnewsapi.net/v3/blogs/" + (Math.floor(Math.random() * (745 - 1 + 1) + 1)))

        .then(res => {
            const item = res.data; 

            setData(item);
        }) 

        .catch(err => {
            console.log(err.message); 
        })
    }, []); 

    return (
        <div style={{overflow: 'visible', width: '100%'}}>
            {
                !data ? 

                    null

                : 

                    <div className="main-bottom-carousel-div-content">
                        <div className="main-carousel-img">
                            <img alt="" src={data.imageUrl} /> 
                        </div>

                        <h3 className="main-carousel-info">{data.title}</h3> 

                        <a className="button-container" href="https://spacenews.com/" target="_blank" rel="noreferrer">
                            <button className="news-button" id="button">More News</button> 
                        </a>
                    </div>
            }
        </div>
    )
} 

function MainPage() {

    //body 
    document.body.style.overflowY = "scroll";

    //carousel 
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 },
      ];

    //useRef 
    const titleAnim = useRef(null); 
    const buttonAnim = useRef(null); 
    const leftAnim = useRef(null); 
    const rightAnim = useRef(null); 

    const car1 = useRef(null); 
    const car2 = useRef(null); 
    const car3 = useRef(null); 
    const carButton = useRef(null); 

    //window size 
    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);
            
            // Call handler right away so state gets updated with initial window size
            handleResize();
            
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        
        return windowSize;
    }

    useEffect(() => {
        gsap.fromTo(titleAnim.current, {opacity: 0, y: -35}, {opacity: 1, y: 0, duration: 1, delay: 0.5}); 
        gsap.fromTo(buttonAnim.current, {opacity: 0, y: 35}, {opacity: 1, y: 0, duration: 0.75, delay: 0.5}); 

        gsap.fromTo(leftAnim.current, {opacity: 0, y: -45}, {opacity: 1, y: 0, duration: 1, delay: 1}); 
        gsap.fromTo(rightAnim.current, {opacity: 0, y: -45}, {opacity: 1, y: 0, duration: 1, delay: 1}); 

        gsap.fromTo(car1.current, { autoAlpha: 0, opacity: 0 }, { duration: 1, autoAlpha: 1, opacity: 1, ease: 'none', delay: 0.95,
                                    scrollTrigger: { id: 'ello', trigger: car1.current, 
                                    start: 'top bottom-=250px', toggleActions: 'play none none reverse', 
                                    markers: false }}); 

        gsap.fromTo(car2.current, { autoAlpha: 0, opacity: 0 }, { duration: 1, autoAlpha: 1, opacity: 1, ease: 'none', delay: 0.65,
                                    scrollTrigger: { id: 'ello', trigger: car2.current, 
                                    start: 'top bottom-=250px', toggleActions: 'play none none reverse', 
                                    markers: false }}); 

        gsap.fromTo(car3.current, { autoAlpha: 0, opacity: 0 }, { duration: 1, autoAlpha: 1, opacity: 1, ease: 'none', delay: 1.3,
                                    scrollTrigger: { id: 'ello', trigger: car3.current, 
                                    start: 'top bottom-=250px', toggleActions: 'play none none reverse', 
                                    markers: false }}); 

        gsap.fromTo(carButton.current, { autoAlpha: 0, opacity: 0, marginBottom: '50px' }, { duration: 0.5, autoAlpha: 1, opacity: 1, ease: 'none', delay: 1.5, marginBottom: '0px', 
                                    scrollTrigger: { id: 'ello', trigger: carButton.current, 
                                    start: 'top bottom', toggleActions: 'play none none reverse', 
                                    markers: false }}); 
    }, [titleAnim, buttonAnim]); 

    return (
        <div className="page-container">

            <NavComponent animBool={true} />

            <div className="main-top-page" style={{background: "url(" + carbackground + ")"}}>
                <div className="main-top-content">
                    <div className="main-top-mid-div">
                        <h2 ref={titleAnim}>Cudil Cars</h2>
                        <Link activeClass="active" to="section1" spy={true} smooth={true} duration={500}>
                            <button id="button" ref={buttonAnim} style={{opacity: 0}}>Click Me</button>
                        </Link>
                    </div>
                    <div className="main-top-bottom-div">
                        <div ref={leftAnim}>
                            <h4>range</h4>
                            <h3>500 mi</h3>
                        </div>
                        <div ref={rightAnim}>
                            <h4>Max Power</h4>
                            <h3>950 hp</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="main-mid-page">
            
                <div className="main-mid-car-container" id="section1">

                    <div className="car-img">
                        <img id="img-1" ref={car1} alt="" src={dreamred} /> 
                        <img id="img-2" ref={car2} alt="" src={dreamblack} /> 
                        <img id="img-3" ref={car3} alt="" src={dreamtan} />
                    </div>

                    <div className="car-button-container"> 
                        <RLink to="/Cudil-Car/Cars">
                            <button className="cars-button" ref={carButton}>Explore Cars</button>
                        </RLink>
                    </div>

                </div>

            </div>

            <div className="main-bottom-page" id="news">

                <h1>News</h1>

                <div className="main-bottom-carousel"> 
                    <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false} showArrows={ size.width < 1024 ? false : true}>
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                        <NewsComp /> 
                    </Carousel> 
                </div>
            </div>

            <FooterComponent /> 

        </div>
    )
}

export default MainPage
