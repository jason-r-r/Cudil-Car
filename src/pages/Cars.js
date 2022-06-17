import React, { useRef, useEffect, useState } from 'react'; 
import '../css/cars.scss'; 
import { carDb } from '../db/CarInfo'; 
import { Link } from 'react-router-dom'; 
import gsap from 'gsap'; 
import background from '../images/miscellaneous/background.jpg'; 
import dreammodel from '../images/model/dream-model.png'; 
import voyagemodel from '../images/model/voyage-model.png'; 
import cygnus from '../images/rims/cygnus-rims.png'; 
import perfo from '../images/rims/perfo-rims.png'; 
import satelite from '../images/rims/satelite-rims.png'; 
import spectra from '../images/rims/spectra-rims.png'; 
import platinum from '../images/paint/platinum.png'; 

function Cars() { 

  //body 
  document.body.style.overflowY = "hidden";

  //useRef 
  const pageAnim = useRef(null); 
  const carAnim = useRef(null); 

  //useState 
  const [customizeOptions, setCustomizeOptions] = useState("model"); 

  const [modelState, setModelState] = useState("dream"); 
  const [colorState, setColorState] = useState('tan'); 
  const [rimsState, setRimsState] = useState("spectra"); 

  const handleDreamModel = () => {
    setModelState("dream"); 
    setColorState("tan"); 
    setRimsState("spectra"); 
  }; 

  const handleVoyageModel = () => {
    setModelState("voyage"); 
    setColorState("white"); 
    setRimsState("cygnus");  
  }; 

  const handleSilver = () => {
    setColorState("silver"); 
    setRimsState("satelite"); 
  }; 

  const handleGray = () => {
    setColorState("gray"); 
    setRimsState("satelite"); 
  }; 

  const handleTan = () => {
    setColorState("tan"); 
    setRimsState("cygnus"); 
  } 

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

  //useEffect 
  useEffect(() => {
    window.scrollTo(0, 0); 

    gsap.fromTo(pageAnim.current, {opacity: 0}, {opacity: 1, top: "0%", duration: 0.5}); 
    // gsap.fromTo(carAnim.current, {opacity: 0}, {opacity: 1, delay: 1.5, duration: 0.5}); 
  }, [])

  return (
    <div>
      <div className="cars-explore-more-options" ref={pageAnim} style={{background: 'url(' + background + ')', display: 'flex'}}>
        
        
        <div className="absolute-top-customize">
          <div id="deez-nuts">
            <div id="color-wheels" onClick={() => setCustomizeOptions("model")} style={customizeOptions === "model" ? {borderBottom: "2px solid rgb(139, 0, 0)", color: 'rgb(139, 0, 0)', opacity: 1} : null }>Model</div>
            <div id="color-wheels" onClick={() => setCustomizeOptions("color")} style={customizeOptions === "color" ? {borderBottom: "2px solid rgb(139, 0, 0)", color: 'rgb(139, 0, 0)', opacity: 1} : null}>Color</div> 
            <div id="color-wheels" onClick={() => setCustomizeOptions("rims")} style={customizeOptions === "rims" ? {borderBottom:  "2px solid rgb(139, 0, 0)", color: 'rgb(139, 0, 0)', opacity: 1} : null}>Rims</div>
            <div id="color-wheels" onClick={() => setCustomizeOptions("paint")} style={customizeOptions === "paint" ? {borderBottom: "2px solid rgb(139, 0, 0)", color: 'rgb(139, 0, 0)', opacity: 1} : null}>Paint</div> 
            <div id="color-wheels" onClick={() => setCustomizeOptions("summary")} style={customizeOptions === "summary" ? {borderBottom: "2px solid rgb(139, 0, 0)", color: 'rgb(139, 0, 0)', opacity: 1}: null}>Summary</div>
          </div>
        </div> 

        <img ref={carAnim} alt="" src={
          modelState === "dream" ? 

            colorState === "tan" ? 

              rimsState === "spectra" ? 

                carDb["Cudil Dream"]["Eureka Gold"]["spectra"] 

              : 

              rimsState === "cygnus" ? 

                carDb["Cudil Dream"]["Eureka Gold"]["cygnus"] 

              : 

              null 

            : 

            colorState === "white" ? 

              rimsState === "spectra" ? 

                carDb["Cudil Dream"]["Stellar White"]["spectra"]

              : 

              rimsState === "cygnus" ? 

                carDb["Cudil Dream"]["Stellar White"]["cygnus"]

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Dream"]["Stellar White"]["satelite"] 

              : 

              rimsState === "perfo" ? 

                carDb["Cudil Dream"]["Stellar White"]["perfo"] 

              : 

              null 

            : 

            colorState === "black" ? 

              rimsState === "spectra" ? 

                carDb["Cudil Dream"]["Infinite Black"]["spectra"]

              : 

              rimsState === "cygnus" ? 

                carDb["Cudil Dream"]["Infinite Black"]["cygnus"]

              : 

              rimsState === "perfo" ? 

              carDb["Cudil Dream"]["Infinite Black"]["perfo"]

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Dream"]["Infinite Black"]["satelite"]

              : 

              null

            :  

            colorState === "red" ? 

              rimsState === "spectra" ? 

                carDb["Cudil Dream"]["Zenith Red"]["spectra"]

              : 

              rimsState === "cygnus" ? 

                carDb["Cudil Dream"]["Zenith Red"]["cygnus"]

              : 

              rimsState === "perfo" ? 

                carDb["Cudil Dream"]["Zenith Red"]["perfo"]

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Dream"]["Zenith Red"]["satelite"]

              : 

              null 

            : 

            colorState === "silver" ? 

              rimsState === "perfo" ? 

                carDb["Cudil Dream"]["Cosmos Silver"]["perfo"]

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Dream"]["Cosmos Silver"]["satelite"]

              : 

              null 

            : 

            colorState === "gray" ? 

              rimsState === "perfo" ? 

                carDb["Cudil Dream"]["Quantum Gray"]["perfo"]

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Dream"]["Quantum Gray"]["satelite"]

              : 

              null 

            : 

            null 

          :

          modelState === "voyage" ?  

            colorState === "white" ? 

              rimsState === "cygnus" ? 

                carDb["Cudil Voyage"]["Stellar White"].cygnus 

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Voyage"]["Stellar White"].satelite 

              : 

              null 

            : 

            colorState === "black" ? 

              rimsState === "cygnus" ? 

                carDb["Cudil Voyage"]["Inifite Black"].cygnus 

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Voyage"]["Inifite Black"].satelite 

              : 

              null 

            : 

            colorState === "silver" ? 

              rimsState === "cygnus" ? 

                carDb["Cudil Voyage"]["Cosmos Silver"].cygnus 

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Voyage"]["Cosmos Silver"].satelite 

              : 

              null 

            : 

            colorState === "gray" ? 

              rimsState === "cygnus" ? 

                carDb["Cudil Voyage"]["Quantum Gray"].cygnus 

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Voyage"]["Quantum Gray"].satelite 

              : 

              null 

            : 

            colorState === "red" ? 

              rimsState === "cygnus" ? 

                carDb["Cudil Voyage"]["Zenith Red"].cygnus 

              : 

              rimsState === "satelite" ? 

                carDb["Cudil Voyage"]["Zenith Red"].satelite 

              : 

              null 

            : 

            null 

          : 

          null 
        } /> 

        <div className="outer-car-color-container">

          {
            customizeOptions === "model" ? 

              size.width < 1024 ? 

                <div className="model-container" style={{justifyContent: 'flex-start'}}>
                  <img alt="" src={dreammodel} className="model-img" onClick={handleDreamModel} style={ modelState !== "dream" ? {filter: 'brightness(0.5)', position: 'relative', width: '200px'} : {position: 'relative', width: '200px', margin: '0px 25px'} } /> 
                  <img alt="" src={voyagemodel} className="model-img" onClick={handleVoyageModel} style={ modelState !== "voyage" ? {filter: 'brightness(0.5)', position: 'relative', width: '200px'} : {position: 'relative', width: '200px', margin: '0px 25px'} } /> 
                </div> 

                : 

                <div className="model-container">
                  <div className="model-img-container" onClick={handleDreamModel} style={ modelState !== "dream" ? {filter: 'brightness(0.5)'} : null}>
                    <img className="model-img" alt="" src={dreammodel} /> 
                  </div>
                  <div className="model-img-container" onClick={handleVoyageModel} style={ modelState !== "voyage" ? {filter: 'brightness(0.5)'} : null}>
                    <img className="model-img" alt="" src={voyagemodel} /> 
                  </div>
                </div> 

              : 

            customizeOptions === "color" ? 

              <div className="car-color-container">
                <div id="black" style={{border: colorState === 'black' ? '4px solid rgb(25, 25, 25)' : 'none'}} onClick={() => setColorState('black')}></div>
                <div id="gray" style={{border: colorState === 'gray' ? '4px solid gray' : 'none'}} onClick={handleGray}></div>
                <div id="red" style={{border: colorState === 'red' ? '4px solid rgb(139, 0, 0)' : 'none'}} onClick={() => setColorState('red')}></div> 
                <div id="silver" style={{border: colorState === 'silver' ? '4px solid silver' : 'none'}} onClick={handleSilver}></div> 
                <div id="white" style={{border: colorState === 'white' ? '4px solid white' : 'none'}} onClick={() => setColorState('white')}></div> 
                {
                  modelState === "dream" ? 

                    <div id="tan" style={{border: colorState === 'tan' ? '4px solid tan' : 'none'}} onClick={handleTan}></div>

                  : 

                    null 
                }
              </div>

              : 

            customizeOptions === "rims" ? 

              modelState === "dream" ? 

                colorState === "white" || colorState === "black" || colorState === "red" ? 

                <div className="rim-container">
                  <img id="rim-img" onClick={() => setRimsState('cygnus')} alt="" src={cygnus} style={ rimsState === 'cygnus' ? null : {filter: 'brightness(0.5)'}} /> 
                  <img id="rim-img" onClick={() => setRimsState('spectra')} alt="" src={spectra} style={ rimsState === 'spectra' ? null : {filter: 'brightness(0.5)'}} /> 
                  <img id="rim-img" onClick={() => setRimsState('perfo')} alt="" src={perfo} style={ rimsState === 'perfo' ? null : {filter: 'brightness(0.5)'}} /> 
                  <img id="rim-img" onClick={() => setRimsState('satelite')} alt="" src={satelite} style={ rimsState === 'satelite' ? null : {filter: 'brightness(0.5)'}} /> 
                </div>

                : 

                colorState === "silver" || colorState === "gray" ? 

                <div className="rim-container">
                  <img id="rim-img" onClick={() => setRimsState('perfo')} alt="" src={perfo} style={ rimsState === 'perfo' ? null : {filter: 'brightness(0.5)'}} /> 
                  <img id="rim-img" onClick={() => setRimsState('satelite')} alt="" src={satelite} style={ rimsState === 'satelite' ? null : {filter: 'brightness(0.5)'}} />                   
                  <div className="rim-img-container">
                    <img id="rim-img" onClick={() => setRimsState('spectra')} alt="" src={spectra} style={ rimsState === 'spectra' ? null : {filter: 'brightness(0.5)'}} /> 
                    <p>Out of Stock</p>
                  </div>
                  <div className="rim-img-container">
                    <img id="rim-img" onClick={() => setRimsState('cygnus')} alt="" src={cygnus} style={ rimsState === 'cygnus' ? null : {filter: 'brightness(0.5)'}} /> 
                    <p>Out of Stock</p>
                  </div>
                </div>

                : 

                <div className="rim-container">
                  <img id="rim-img" onClick={() => setRimsState('spectra')} alt="" src={spectra} style={ rimsState === 'spectra' ? null : {filter: 'brightness(0.5)'}} /> 
                  <img id="rim-img" onClick={() => setRimsState('cygnus')} alt="" src={cygnus} style={ rimsState === 'cygnus' ? null : {filter: 'brightness(0.5)'}} />          
                  <div className="rim-img-container">
                    <img id="rim-img" onClick={() => setRimsState('perfo')} alt="" src={perfo} style={ rimsState === 'perfo' ? null : {filter: 'brightness(0.5)'}} /> 
                    <p>Out of Stock</p>
                  </div>
                  <div className="rim-img-container">
                    <img id="rim-img" onClick={() => setRimsState('satelite')} alt="" src={satelite} style={ rimsState === 'satelite' ? null : {filter: 'brightness(0.5)'}} />         
                    <p>Out of Stock</p>
                  </div>
                </div>

                : 
                
                <div className="rim-container">
                  <img id="rim-img" onClick={() => setRimsState('cygnus')} alt="" src={cygnus} style={ rimsState === 'cygnus' ? null : {filter: 'brightness(0.5)'}} />  
                  <img id="rim-img" onClick={() => setRimsState('satelite')} alt="" src={satelite} style={ rimsState === 'satelite' ? null : {filter: 'brightness(0.5)'}} /> 
                  <div className="rim-img-container">
                    <img id="rim-img" onClick={() => setRimsState('perfo')} alt="" src={perfo} style={ rimsState === 'perfo' ? null : {filter: 'brightness(0.5)'}} /> 
                    <p>Out of Stock</p>
                  </div>
                  <div className="rim-img-container">
                    <img id="rim-img" onClick={() => setRimsState('spectra')} alt="" src={spectra} style={ rimsState === 'spectra' ? null : {filter: 'brightness(0.5)'}} /> 
                    <p>Out of Stock</p>
                  </div>
                </div>

              : 

            customizeOptions === "paint" ? 

              <div className="paint-container">
                <img id="paint-img" alt="" src={platinum} /> 
              </div> 

              :

            customizeOptions === "summary" ? 

              <Link to={"/Cudil-Car/Purchase-Car/" + modelState + "/" + colorState + "/" + rimsState + "/platinum"}>
                <button id="finalize">Finalize</button>
              </Link>
              
              : 

              null 
          }
          
        </div>
        
      </div>
    </div>
  )
}

export default Cars; 
