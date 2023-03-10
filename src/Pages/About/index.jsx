//Construction Page "A propos"

//Importation des éléments à utiliser 
import dataAbout from '../../Data/aboutData.json'
import Collapse from '../../components/Collapse'
import ImgBannerXL from '../../assets/AboutBannerImg.png'
import ImgBannerSmall from '../../assets/AboutImgBannerSmall.png'
import styled from 'styled-components'

//Importation des données de la page "A propos"
const datas=dataAbout

//Construction du DOM + CSS via styled-component
const AboutWrapper=styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
margin-bottom:100px`

const AboutBanner = styled.div`
width:95%;
height:223px;
border-radius:10px;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${ImgBannerSmall});
background-size:cover;
background-repeat: no-repeat;
margin-bottom:10px;
@media all and (min-width:1024px){
background-image:url(${ImgBannerXL});
border-radius:25px;
}
`
/*Création de la page "A propos"
Utilisation de la methode map sur les datas et du composant Collapse pour chaque section*/
function About() {
    return (
    <AboutWrapper>
    <AboutBanner/>
    {datas&&datas.map((data, index)=><Collapse key={index} title={data.title} text={data.text}/>)}
    </AboutWrapper>)  
}

export default About