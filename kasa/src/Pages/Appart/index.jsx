import { useParams } from "react-router-dom"
import styled from 'styled-components'
import data from '../../Data/data.json'
import Carroussel from "../../components/Carroussel"
import Tag from "../../components/Tag"

const AppartWrapper = styled.div`
width:100%;
height:812px;
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

const MarkArea = styled.div`
`

function Appart() {
    const {id}=useParams();
    const appart = data.find(p=>p.id === id)
    const tags = appart.tags
   return(<AppartWrapper>
    <Carroussel image={appart.pictures[0]}/>
    <AppartTitle>{appart.title}</AppartTitle>
    <AppartLocation>{appart.location}</AppartLocation>
    <TagArea>{tags&&tags.map((tag, index)=><Tag key={index} tags={tag}/>)}</TagArea>
    
   </AppartWrapper>) 
}

export default Appart