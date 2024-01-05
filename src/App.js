import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import CreatePlan from './Components/CreatePlan';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/Coffeeroasters-app" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/createplan" element={<CreatePlan/>}/>
      </Routes>
    <Footer />
    </Router>
    
  );
};

export default App;