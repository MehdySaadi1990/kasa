import Logo from '../../assets/logo.png'
import styled from'styled-components'
import {Link} from 'react-router-dom'


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
@media all and (min-width:768px){
    height:68px;
    width:211px;
    padding: 0 10px 0px 30px;
    }
`
const NavBar = styled.nav`
margin-left:auto;
width:50%;
height:45px;
display:flex;
justify-content:space-around;
align-items:center;
@media all and (min-width: 768px) {
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
@media all and (min-width: 768px) {
    font-size: 24px;
    text-transform:none;
}
`
function Header() {
    return (<Banner>
        <ImageLogo src={Logo} alt="image Logo"/>
        <NavBar>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/about'>A propos</NavLink>
        </NavBar>
    </Banner>)
}

export default Header