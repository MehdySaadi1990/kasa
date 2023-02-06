//Construction HomeCard

//Importation des éléments à utiliser 
import { Link } from "react-router-dom"
import styled from "styled-components"

//Construction du DOM + CSS via styled-component
const Card= styled(Link)`
width:95%;
height:200px;
border-radius:10px;
margin:10px 0 10px 0;
display:flex;
justify-content:flex-start;
align-items:flex-end;
text-decoration:none;
${(props) =>
    props.$image &&
    `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${props.$image});
    background-repeat: no-repeat;
    background-size: cover;`
}
@media all and (min-width:1024px){
    height:300px;
    width:25%;
    margin: 26px 30px;
  }
`
const NameAppart=styled.h2`
width:60%;
color:white;
font-weight:500;
font-size: 18px;
padding-left:5px;
`
/*Création du composant React HomeCard 
qui sera présent sur la page d'accueil du site pour présenter les différents appartements*/
function HomeCard({image, title, link}) {
    return(
        <Card to={link} $image={image}>
            <NameAppart>{title}</NameAppart>
        </Card>
    )
}

export default HomeCard