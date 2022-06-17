import React, { useRef, useEffect } from 'react'; 
import '../../css/portion/footer.scss'; 
import gsap from 'gsap'; 

function FooterComponent() { 

    //useRef 
    const bottomNav1 = useRef(null); 
    const bottomNav2 = useRef(null); 
    const bottomNav3 = useRef(null); 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(bottomNav1.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'none', 
                                        scrollTrigger: {id: 'ello', trigger: bottomNav1.current, 
                                        start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                        markers: false}}); 

        gsap.fromTo(bottomNav2.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'none', 
                                        scrollTrigger: {id: 'ello', trigger: bottomNav2.current, 
                                        start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                        markers: false}}); 

        gsap.fromTo(bottomNav3.current, {autoAlpha: 0}, {duration: 1, autoAlpha: 1, ease: 'none', 
                                        scrollTrigger: {id: 'ello', trigger: bottomNav3.current, 
                                        start: 'top bottom-=100px', toggleActions: 'play none none reverse', 
                                        markers: false}}); 
    }, []); 
  return (
    <div>

        <div className="main-bottom-nav">
            <div className="main-bottom-nav-grid-display">
                <div className="main-bottom-nav-content" ref={bottomNav1}>
                    <h3>Cudil Air</h3>
                    <div id="main-rec"></div>

                    <ul>
                        <span>Discover Air</span>
                        <span>Design Yours</span>
                        <span>Reserve Now</span>
                    </ul>

                </div>
                <div className="main-bottom-nav-content" ref={bottomNav2}>
                    <h3>Cudil Motors</h3>
                    <div id="main-rec"></div>

                    <ul>
                        <span>Company</span>
                        <span>Leadership</span>
                        <span>Careers</span>
                        <span>Stories</span>
                        <span>Future Models</span>
                    </ul>

                </div>
                <div className="main-bottom-nav-content" ref={bottomNav3}>
                    <h3>More</h3>
                    <div id="main-rec"></div>

                    <ul>
                        <span>Purchase & Ownership</span>
                        <span>FAQ</span>
                        <span>Contact Us</span>
                        <span>Locations</span>
                        <span>Events</span>
                        <span>Media Room</span>
                    </ul>

                </div>   
            </div>

            <p id="main-terms">Privacy / Terms / Code of Conduct</p>

        </div>

    </div>
  )
}

export default FooterComponent