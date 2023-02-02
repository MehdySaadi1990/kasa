import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/index'
import About from './Pages/About';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Error from './Pages/Error';
import { createGlobalStyle } from 'styled-components'
import Appart from './Pages/Appart';


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', sans-serif;
    }
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
    <Header />
    <Routes>
    <Route index path='/' element={<Home />}/>
    <Route path='/appart/:id' element={<Appart />}/>
    <Route path='/about' element={<About />}/>
    <Route path='*' element={<Error />}/>
    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);

