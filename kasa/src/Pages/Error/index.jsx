import '../../utils/style/Error.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ErroMessageArea=styled.div`
width:100%;
height:600px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color: #FF6060;
text-align:center`

const ErrorNumber=styled.span`
font-weight:700;
font-size: 96px;
line-height: 142.6%;
`
const ErrorMessage=styled.span`
width:70%;
`
const HomePageReturn = styled(Link)`
width:70%;
padding-top:150px;
text-decoration:none;
color:#FF6060;
&:hover{
  text-decoration:underline;
}
`
function Error() {
    return( <ErroMessageArea>
      <ErrorNumber>404</ErrorNumber>
      <ErrorMessage>Oups! La page que <br /> vous demandez n'existe pas.</ErrorMessage>
      <HomePageReturn to='/'>Retourner sur la page d'accueil</HomePageReturn>
    </ErroMessageArea>)
}

export default Error