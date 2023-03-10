//Construction Header

//Importation des éléments à utiliser 
import Logo from '../../assets/logo.png'
import styled from'styled-components'
import {Link} from 'react-router-dom'

//Construction du DOM + CSS via styled-component
const Banner = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
margin:20px 0 20px 0;
`
const ImageLogo = styled.img`
height:47px;
width:145px;
padding: 0 10px 10px 20px;
@media all and (min-width:1024px){
    height:68px;
    width:211px;
    padding: 0 10px 0px 50px;
    }
`
const NavBar = styled.nav`
margin-left:auto;
width:50%;
height:45px;
display:flex;
justify-content:space-around;
align-items:center;
@media all and (min-width: 1024px) {
    width:30%;
}` 

const NavLink=styled(Link)`
text-decoration:none;
text-transform: uppercase;
font-weight:400;
font-size: 12px;
line-height: 17px;
text-align: center;
color:#FF6060;
&:hover{
    text-decoration:underline;
}
@media all and (min-width: 1024px) {
    font-size: 24px;
    text-transform:none;
}
`
/*Création du composant React Header 
qui sera présent sur toute les pages du site avec une barre de navigation*/
function Header() {
    return (<Banner>
        <ImageLogo src={Logo} alt="image Logo"/>
        <NavBar>
        <NavLink to='/kasa'>Accueil</NavLink>
        <NavLink to='/kasa/about'>A propos</NavLink>
        </NavBar>
    </Banner>)
}

export default Header