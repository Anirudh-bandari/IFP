import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import CartReview from "./routes/CartReview";
import CropDetails from "./routes/CropDetails";
import Helpdesk from "./routes/Helpdesk";
import Home from "./routes/Home";
import Homepage from "./routes/Homepage";
import Predict from "./routes/Predict";
import PredictCrop from "./routes/PredictCrop";
import Predictloan from "./routes/Predictloan";
import Profile from "./routes/Profile";
import Schemes from "./routes/Schemes";
import Shop from "./routes/Shop";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/schemes" element={<Schemes />} />
          <Route exact path="/helpdesk" element={<Helpdesk />} />
          <Route exact path="/predict" element={<Predict />} />
          <Route exact path="/predict/crop" element={<PredictCrop />} />
          <Route exact path="/predict/loan" element={<Predictloan />} />
          <Route exact path="/marketplace" element={<Homepage/>} />
          <Route exact path="/review/cart" element={<CartReview/>} />
          <Route exact path="/food/details/:keys" element={<CropDetails/>} />
         
        </Routes>

    </Router>
  );
}

export default App;
