import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import BDI from './pages/BDI'
import ContactUs from './pages/Contact';
import  Chart  from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
import Graph from './pages/Graph'
import Treatments from './pages/Treatment';
import Moderate1 from './pages/Treatments/Moderate1'
import Moderate2 from './pages/Treatments/Moderate2'
import Moderate3 from './pages/Treatments/Moderate3'
import Moderate4 from './pages/Treatments/Moderate4'

import Mild1 from './pages/Treatments/Mild1';
import Mild2 from './pages/Treatments/Mild2';
import Mild3 from './pages/Treatments/Mild3';
import Mild4 from './pages/Treatments/Mild4';

import Borderline1 from './pages/Treatments/Borderline1';
import Borderline2 from './pages/Treatments/Borderline2';
import Borderline3 from './pages/Treatments/Borderline3';
import Borderline4 from './pages/Treatments/Borderline4';

import Non from './pages/Treatments/NotSevere';
import Severe from './pages/Treatments/Severe';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/graph' element={<Graph />} />
          <Route path='/profile' element={<Profile />} />
          <Route path = "/bdi" element={<BDI/>} /> 
          <Route path = "/contact" element={<ContactUs/>} /> 

          <Route path = "/treatments" element={<Treatments/>} /> 
          
          <Route path = "/moderate1" element={<Moderate1/>} /> 
          <Route path = "/moderate2" element={<Moderate2/>} /> 
          <Route path = "/moderate3" element={<Moderate3/>} /> 
          <Route path = "/moderate4" element={<Moderate4/>} /> 

          <Route path = "/mild1" element={<Mild1/>} /> 
          <Route path = "/mild2" element={<Mild2/>} /> 
          <Route path = "/mild3" element={<Mild3/>} /> 
          <Route path = "/mild4" element={<Mild4/>} /> 

          <Route path = "/borderline1" element={<Borderline1/>} /> 
          <Route path = "/borderline2" element={<Borderline2/>} /> 
          <Route path = "/borderline3" element={<Borderline3/>} /> 
          <Route path = "/borderline4" element={<Borderline4/>} /> 

          <Route path = "/nonsevere" element={<Non/>} /> 
          <Route path = "/severe" element={<Severe/>} /> 
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
 
      
    </BrowserRouter>
  );
}
