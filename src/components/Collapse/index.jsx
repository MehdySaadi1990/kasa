//Construction des bannières d'informations

//Importation des éléments à utiliser 
import styled, {keyframes} from "styled-components"
import arrowDown from '../../assets/down-arrow.svg'
import { useState } from "react"

//Construction du DOM + CSS via styled-component
const deploy = keyframes`
from{
    transform-origin:top;
    transform:scaleY(0);
    opacity:0;
    
to{
    transform:scaleY(1);
    opacity:1
}`


const DescriptionArea = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    margin-top:10px;
    `

const DescriptionBanner = styled.div`
    width:95%;
    height:30px;
    font-size:13px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#FF6060;
    color:#FFFFFF;
    border-radius:5px;
    padding: 0 10px 0 10px;
    `

const Arrow = styled.img`
    width:12px;
    height:15px;
    cursor:pointer;
    ${(props) =>
        props.$return?`
        transform:rotate(180deg);
        transition:transform 200ms linear`:
        `transform:rotate(0deg);
        transition:transform 200ms linear
        `
    }`

const DescriptionList = styled.div`
    width:95%;
    height:auto;
    background-color:#F7F7F7;
    padding:10px;
    display:flex;
    flex-direction:column;
    color:#FF6060;
    border-radius:0 0 10px 10px;
    animation:${deploy} 300ms ease-in-out
    `
const Text = styled.span`
    font-size:12px;
    `
/*Création du composant React  Collapse utilisant
 les props title, lists, text*/
function DeployingBannerList({title, lists, text}) {
/*Utilisation du state pour gestion des informations à afficher
 selon si le collapse est ouvert ou non*/
    const [openBanner, setBanner]=useState(true)
    return (openBanner?(
        <DescriptionArea>
        <DescriptionBanner>
        {title}
        <Arrow src={arrowDown} alt='fleche-bas' onClick={()=>setBanner(!openBanner)}/>
        </DescriptionBanner>
        </DescriptionArea>):(<DescriptionArea>
        <DescriptionBanner>
        {title}
        <Arrow $return={true} src={arrowDown} alt='fleche-haut' onClick={()=>setBanner(!openBanner)}/>
        </DescriptionBanner>
        <DescriptionList>{lists?lists.map((list, index)=><Text key={index}>{list}</Text>):<Text>{text}</Text>}</DescriptionList>
        </DescriptionArea>
        ))
}

export default DeployingBannerList