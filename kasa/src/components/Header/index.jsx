import '../../utils/style/Header.css'
import Logo from '../../assets/logo.png'
import styled from'styled-components'
import {Link} from 'react-router-dom'


const Banner = styled.div`
width:100%;
height:100px;
display:flex;
align-items:center;
`
const ImageLogo = styled.img`
height:45px;
width:140px;
padding: 0 10px 10px 10px;
`
const NavBar = styled.nav`
margin-left:auto;
width:50%;
height:45px;
display:flex;
justify-content:space-around;
align-items:center;
@media (min-width: 599px) {
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
`
function Header() {
    return (<Banner>
        <ImageLogo src={Logo} alt="image Logo"/>
        <NavBar>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to=''>A propos</NavLink>
        </NavBar>
    </Banner>)
}

export default Header