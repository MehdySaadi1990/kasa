//Construction Footer 

//Importation des éléments à utiliser 
import styled from 'styled-components'
import Logo from '../../assets/footerLogo.svg'

//Construction du DOM + CSS via styled-component
const FooterArea = styled.div`
width:100%;
height:150px;
padding: 62px 0 62px 0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#000000;
margin-top:10px;

`
const FooterLogo = styled.img`
width:50%;
height:35px;
`
const FooterText=styled.p`
color:white;
font-size:12px;
height:25px;
display:flex;
align-items:flex-end;
`
/*Création du composant React Footer qui sera présent sur toute les pages du site */
function Footer() {
    return(
        <FooterArea>
            <FooterLogo src={Logo} alt='logo noir et blanc kasa'/>
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterArea>
    )

}

export default Footer