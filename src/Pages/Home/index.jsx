//Construction Page "Home"

//Importation des éléments à utiliser 
import styled from 'styled-components';
import ImgBannerXL from '../../assets/ImgBannerHome.png'
import data from '../../Data/data.json';
import HomeCard from '../../components/HomeCard';
//Importation des données apparts
const apparts = data
//Construction du DOM + CSS via styled-component
const HomeWrapper=styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`

const HomeBanner = styled.div`
width:95%;
height:111px;
border-radius:10px;
background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${ImgBannerXL});
background-repeat: no-repeat;
background-size: cover;
display:flex;
align-items:center;
margin-bottom:10px;
@media all and (min-width:1024px){
  height:223px;
  justify-content:center;
}`

const BannerText = styled.span`
width:60%;
color:white;
font-size:24px;
font-weight:500;
padding-left:16px;
@media all and (min-width:1024px){
  font-size:48px;
}
`
const CardWrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius:25px;
@media all and (min-width:1024px){
  width:95%;
  flex-direction:row;
  justify-content:space-around;
  flex-wrap:wrap;
  background-color:#F7F7F7;
  padding:46px 0;
}
`
/*Création de la page "Home"
Utilisation de la methode map et du composant HomeCard pour affichage des cards*/
function Home() {
  
  return (
    <HomeWrapper>
      <HomeBanner>
      <BannerText>Chez vous, partout et ailleurs</BannerText>
      </HomeBanner>
      <CardWrapper>
      {apparts?apparts.map((appart)=>
      <HomeCard  key={appart.id} image={appart.cover} title={appart.title} link={`/kasa/appart/${appart.id}`}/>):null}
      </CardWrapper>
    </HomeWrapper>
  );
}

export default Home;
