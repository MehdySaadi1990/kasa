import '../../utils/style/Footer.css'
import styled from 'styled-components'
import Logo from '../../assets/footerLogo.svg'

const FooterArea = styled.div`
width:100%;
height:200px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#000000;
margin-top:10px;
`
const FooterLogo = styled.img`
width:122px;
height:35px;
`
const FooterText=styled.p`
color:white;
font-size:12px;
height:25px;
display:flex;
align-items:flex-end;
`
function Footer() {
    return(
        <FooterArea>
            <FooterLogo src={Logo} alt='logo noir et blanc kasa'/>
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterArea>
    )

}

export default Footer