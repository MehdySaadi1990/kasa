//Construction de l'application react

//Importation des éléments à utiliser 
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

//Définition d'un style global pour la police de caractère
const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', sans-serif;
    }
`
//Création des différentes routes React avec React Router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
    <Header />
    <Routes>
    <Route index path='/kasa' element={<Home />}/>
    <Route path='/kasa/appart/:id' element={<Appart />}/>
    <Route path='/kasa/about' element={<About />}/>
    <Route path='kasa/*' element={<Error />}/>
    </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);

