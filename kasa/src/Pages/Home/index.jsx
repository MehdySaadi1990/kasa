import '../../utils/style/Home.css';
import styled from 'styled-components';
import ImgBanner from '../../assets/bannerImg.png';
import data from '../../Data/data.json';
import HomeCard from '../../components/HomeCard';

const apparts = data

const HomeWrapper=styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

const HomeBanner = styled.div`
width:95%;
height:130px;
border-radius:10px;
background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${ImgBanner});
background-repeat: no-repeat;
background-size: cover;
margin-bottom:10px;
`
const BannerText = styled.span`
position:relative;
top:35px;
left:35px;
color:white;
font-size:24px;
`

function Home() {
  
  return (
    <HomeWrapper>
      <HomeBanner>
      <BannerText>Chez vous,<br/>partout et ailleurs</BannerText>
      </HomeBanner>
      {apparts?apparts.map((appart)=>
      <HomeCard  key={appart.id} image={appart.cover} title={appart.title} link={`/appart/${appart.id}`}/>):null}
    </HomeWrapper>
  );
}

export default Home;
