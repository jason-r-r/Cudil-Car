import MainPage from './pages/MainPage'; 
import { Routes, Route } from "react-router-dom";
import Cars from './pages/Cars';
import PurchaseCar from './pages/PurchaseCar';

function App() {
  return (
    <div>

      <Routes>

        <Route path="/Cudil-Car/" element={<MainPage />} /> 

        <Route path="/Cudil-Car/Cars" element={<Cars />} />  

        <Route path="/Cudil-Car/Purchase-Car/:model/:color/:rims/:paint/" element={<PurchaseCar />} /> 

      </Routes> 

    </div>
  );
}

export default App;
