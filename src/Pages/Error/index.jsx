import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ErroMessageArea=styled.div`
width:100%;
height:812px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color: #FF6060;
text-align:center;
@media all and (min-width:768px){
  height:1024px
}`

const ErrorNumber=styled.span`
font-weight:700;
font-size: 96px;
line-height: 142.6%;
@media all and (min-width:768px){
  font-weight: 700;
  font-size: 288px;
}
`
const ErrorMessage=styled.span`
width:70%;
margin-bottom:150px;
font-weight:500;
display:flex;
align-items:center;
@media all and (min-width:768px){
  font-weight: 500;
  font-size: 36px;
}
`
const HomePageReturn = styled(Link)`
width:70%;
text-decoration:none;
color:#FF6060;
font-weight:500;
font-weight:14px;
&:hover{
  text-decoration:underline;
}
@media all and (min-width:768px){
  font-weight: 500;
  font-size: 18px;
}
`
function Error() {
    return( <ErroMessageArea>
      <ErrorNumber>404</ErrorNumber>
      <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
      <HomePageReturn to='/kasa'>Retourner sur la page d'accueil</HomePageReturn>
    </ErroMessageArea>)
}

export default Error