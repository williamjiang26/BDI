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
import Graph2 from './pages/Graph2'
import Treatments from './pages/Treatment';
import Moderate1 from './pages/Treatments/Moderate1'
import Moderate2 from './pages/Treatments/Moderate2'
import Moderate3 from './pages/Treatments/Moderate3'
import Mild1 from './pages/Treatments/Mild1';
import Mild2 from './pages/Treatments/Mild2';
import Mild3 from './pages/Treatments/Mild3';
import Mild4 from './pages/Treatments/Mild4';
import Mild5 from './pages/Treatments/Mild5';
import Mild6 from './pages/Treatments/Mild6';
import Mild7 from './pages/Treatments/Mild7';
import Mild8 from './pages/Treatments/Mild8';
import Mild9 from './pages/Treatments/Mild9';
import Non from './pages/Treatments/NotSevere';
import Severe from './pages/Treatments/Severe';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/graph2' element={<Graph2 />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path = "/bdi" element={<BDI/>} /> 
          <Route path='/graph' element={<Graph2 />} />
          <Route path = "/contact" element={<ContactUs/>} /> 
          <Route path = "/treatments" element={<Treatments/>} /> 
          <Route path = "/moderate1" element={<Moderate1/>} /> 
          <Route path = "/moderate2" element={<Moderate2/>} /> 
          <Route path = "/moderate3" element={<Moderate3/>} /> 
          <Route path = "/mild1" element={<Mild1/>} /> 
          <Route path = "/mild2" element={<Mild2/>} /> 
          <Route path = "/mild3" element={<Mild3/>} /> 
          <Route path = "/mild4" element={<Mild4/>} /> 
          <Route path = "/mild5" element={<Mild5/>} /> 
          <Route path = "/mild6" element={<Mild6/>} /> 
          <Route path = "/mild7" element={<Mild7/>} /> 
          <Route path = "/mild8" element={<Mild8/>} /> 
          <Route path = "/mild9" element={<Mild9/>} /> 
          <Route path = "/nonsevere" element={<Non/>} /> 
          <Route path = "/severe" element={<Severe/>} /> 
        </Route>
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
