import React, { useEffect, useState } from 'react'; 
import '../css/purchasecar.scss'; 
import background from '../images/miscellaneous/background.jpg'; 
import { useParams } from 'react-router-dom'; 
import { carDb } from '../db/CarInfo';

function PurchaseCar() { 

  //url parameters 
  const { model, color, rims, paint } = useParams(); 

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

  //body
  if (size.width < 768) {
    document.body.style.overflowY = "scroll"; 
  }  

  else {
    document.body.style.overflowY = "hidden";
  }

  return (
    <div className="purchase-car-page">

        <div className="absolute-left-side" style={{background: 'url(' + background + ')'}}>
            <img alt="" src={
              model === "dream" ? 

                color === "tan" ? 

                  rims === "spectra" ? 

                    carDb["Cudil Dream"]["Eureka Gold"]["spectra"]

                  : 

                  rims === "cygnus" ? 

                    carDb["Cudil Dream"]["Eureka Gold"]["cygnus"]

                  : 

                  null 

                : 

                color === "white" ? 

                  rims === "spectra" ? 

                    carDb["Cudil Dream"]["Stellar White"]["spectra"]

                  : 

                  rims === "cygnus" ? 

                    carDb["Cudil Dream"]["Stellar White"]["cygnus"]

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Dream"]["Stellar White"]["satelite"]

                  : 

                  rims === "perfo" ? 

                    carDb["Cudil Dream"]["Stellar White"]["perfo"] 

                  : 

                  null 

                : 

                color === "black" ? 

                  rims === "spectra" ? 

                    carDb["Cudil Dream"]["Infinite Black"]["spectra"] 

                  : 

                  rims === "cygnus" ? 

                    carDb["Cudil Dream"]["Infinite Black"]["cygnus"]

                  : 

                  rims === "perfo" ? 

                    carDb["Cudil Dream"]["Infinite Black"]["perfo"] 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Dream"]["Infinite Black"]["satelite"] 

                  : 

                  null 

                : 

                color === "red" ? 

                  rims === "spectra" ? 

                    carDb["Cudil Dream"]["Zenith Red"]["spectra"] 

                  : 

                  rims === "cygnus" ? 

                    carDb["Cudil Dream"]["Zenith Red"]["cygnus"] 

                  : 

                  rims === "perfo" ? 

                    carDb["Cudil Dream"]["Zenith Red"]["perfo"]

                  : 
                  
                  rims === "satelite" ? 

                    carDb["Cudil Dream"]["Zenith Red"]["satelite"] 

                  : 

                  null 

                : 

                color === "silver" ? 

                  rims === "perfo" ? 

                    carDb["Cudil Dream"]["Cosmos Silver"]["perfo"] 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Dream"]["Cosmos Silver"]["satelite"]

                  : 

                  null 

                : 

                color === "gray" ? 

                  rims === "perfo" ? 

                    carDb["Cudil Dream"]["Quantum Gray"]["perfo"] 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Dream"]["Quantum Gray"]["satelite"] 

                  : 

                  null 

                : 

                null 

              : 

              model === "voyage" ? 

                color === "white" ? 

                  rims === "cygnus" ? 

                    carDb["Cudil Voyage"]["Stellar White"].cygnus

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Voyage"]["Stellar White"].satelite

                  : 

                  null 

                : 

                color === "black" ? 

                  rims === "cygnus" ? 

                    carDb["Cudil Voyage"]["Inifite Black"].cygnus 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Voyage"]["Inifite Black"].satelite 

                  : 

                  null 

                : 

                color === "silver" ? 

                  rims === "cygnus" ? 

                    carDb["Cudil Voyage"]["Cosmos Silver"].cygnus 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Voyage"]["Cosmos Silver"].satelite 

                  : 

                  null 

                : 

                color === "gray" ? 

                  rims === "cygnus" ? 

                    carDb["Cudil Voyage"]["Quantum Gray"].cygnus 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Voyage"]["Quantum Gray"].satelite 

                  : 

                  null 

                : 

                color === "red" ? 

                  rims === "cygnus" ? 

                    carDb["Cudil Voyage"]["Zenith Red"].cygnus 

                  : 

                  rims === "satelite" ? 

                    carDb["Cudil Voyage"]["Zenith Red"].satelite 

                  : 

                  null 

                : 

                null 

              : 

              null 
            } />
        </div>

        <div className="right-side-nav-bar">
            <div className="top-two-options">
                <h1>Summary</h1>
            </div>
            <div className="right-side-nav-bottom-portion-container">
              <div id="content">
                <div id="left">Model</div>
                <div id="right">{model}</div>
              </div>
              <div id="content">
                <div id="left">Color</div>
                <div id="right">
                  {
                    color === "tan" ? 
                      "Eureka Gold"
                    : 
                    color === "white" ? 
                      "Stellar White" 
                    : 
                    color === "black" ? 
                      "Infinite Black" 
                    : 
                    color == "red" ? 
                      "Zenith Red"
                    : 
                    color === "silver" ? 
                      "Cosmos Silver" 
                    : 
                    color === "gray" ? 
                      "Quantum Gray"
                    : 
                    null 
                  }
                </div>
              </div>
              <div id="content">
                <div id="left">Rims</div> 
                <div id="right">{rims}</div>
              </div>
              <div id="content">
                <div id="left">Paint</div> 
                <div id="right">{paint}</div>
              </div>
              <div id="content">
                <div id="left">Price</div>
                <div id="right">$150,000</div>
              </div>
            </div>
            <div className="right-nav-button-container">
              <button>Buy Now</button>
            </div>
        </div>

    </div>
  )
}

export default PurchaseCar; 
