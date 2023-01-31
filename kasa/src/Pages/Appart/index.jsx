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


const AppartWrapper = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
color:#FF6060;
`
const AppartTitle= styled.h2`
width:92%;
font-style: normal;
font-weight: 500;
font-size: 18px;
text-align:left
`
const AppartLocation=styled.span`
width:92%;
font-style: normal;
font-weight: 500;
font-size: 14px;
text-align:left
`
const TagArea=styled.div`
width:92%;
height:auto;
display:flex;
flex-wrap:wrap;
justify-content:flex-start;
align-items:center;`

const MarkArea=styled.div`
width:92%;
height:33px;
display:flex;
justify-content:space-between;
align-items:center;
margin:10px 0`

const Host = styled.p`
width:auto;
height:auto;
font-size:12px
`
const HostPictureProfile=styled.img`
width:32px;
height:32px;
border-radius:50%;
`
function Appart() {
    const {id}=useParams();
    const appart = data.find(p=>p.id === id)
    if(!appart){
        return <Error/>
    }
   return(<AppartWrapper>
    <Carroussel image={appart.pictures}/>
    <AppartTitle>{appart.title}</AppartTitle>
    <AppartLocation>{appart.location}</AppartLocation>
    <TagArea>{appart.tags&&appart.tags.map((tag, index)=><Tag key={index} tags={tag}/>)}</TagArea>
    <MarkArea><Rating rating={appart.rating} redstar={RedStar} greystar={GreyStar}/><Host>{appart.host.name}</Host><HostPictureProfile src={appart.host.picture} alt='photo-hôte'/></MarkArea>
    <Collapse  title = 'Description' text={appart.description} />
    <Collapse  title = 'Equipements' lists={appart.equipments} />
   </AppartWrapper>
   ) 
}

export default Appart