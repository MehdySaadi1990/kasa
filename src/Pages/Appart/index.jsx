//Construction Page "Appart"

//Importation des éléments à utiliser 
import { useParams } from "react-router-dom"
import styled from 'styled-components'
import data from '../../Data/data.json'
import Carroussel from "../../components/Carroussel"
import Tag from "../../components/Tag"
import RedStar from '../../assets/red-star.svg'
import GreyStar from '../../assets/grey-star.svg'
import Rating from "../../components/Rating"
import Collapse from "../../components/Collapse"
import Error from '../Error'

//Construction du DOM + CSS via styled-component
const AppartWrapper = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#FF6060;
`
const AppartDescription = styled.div`
width:92%;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
`
const AppartTitle= styled.h2`
width:100%;
font-style: normal;
font-weight: 500;
font-size: 18px;
text-align:left;
@media all and (min-width:768px){
  align-self:flex-start;
  width:60%;
  font-size: 36px;
  margin:10px 0;
  }
`
const AppartLocation=styled.span`
width:100%;
font-style: normal;
font-weight: 500;
font-size: 14px;
text-align:left;
@media all and (min-width:768px){
    font-size: 18px;
    width:60%;
  }
`
const TagArea=styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:center;
@media all and (min-width:768px){

}`

const MarkArea=styled.div`
width:100%;
height:33px;
display:flex;
justify-content:space-between;
align-items:center;
margin:10px 0;
@media all and (min-width:768px){
  position:absolute;
  left:75%;
  bottom:40px;
  width:20%;
  height:auto;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:flex-end;
}`

const Host = styled.p`
width:auto;
height:auto;
font-size:12px;
margin-left:auto;
@media all and (min-width:768px){
  font-size:18px;
  order:-1
}
`
const HostPictureProfile=styled.img`
width:32px;
height:32px;
border-radius:50%;
margin-left:10px;
@media all and (min-width:768px){
  width:64px;
  height:64px;
  order:-1
}
`
const CollapseArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
margin-bottom:50px;
@media all and (min-width:768px){
  height:250px;
  flex-direction:row;
}`
/*Création de la page "Appart"
Utilisation du UseParams pour récupérer l'ID de l'URL
Affichage des informations d'un appartement */
function Appart() {
    const {id}=useParams();
    const appart = data.find(p=>p.id === id)
    if(!appart){
        return <Error/>
    }
   return(<AppartWrapper>
    <Carroussel  image={appart.pictures}/>
    <AppartDescription>
    <AppartTitle>{appart.title}</AppartTitle>
    <AppartLocation>{appart.location}</AppartLocation>
    <TagArea>{appart.tags&&appart.tags.map((tag, index)=><Tag key={index} tags={tag}/>)}</TagArea>
    <MarkArea>
    <Rating rating={appart.rating} redstar={RedStar} greystar={GreyStar}/>
    <Host>{appart.host.name}</Host>
    <HostPictureProfile src={appart.host.picture} alt='photo-hôte'/>
    </MarkArea>
    <CollapseArea>
    <Collapse isAppart={true} title = 'Description' text={appart.description} />
    <Collapse isAppart={true} title = 'Equipements' lists={appart.equipments} />
    </CollapseArea>
    </AppartDescription>
   </AppartWrapper>
   ) 
}

export default Appart