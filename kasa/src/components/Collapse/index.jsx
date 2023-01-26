import styled from "styled-components"
import arrowDown from '../../assets/down-arrow.svg'
import arrowUp from '../../assets/up-arrow.svg'
import { useState } from "react"

const DescriptionArea = styled.div`
    width:92%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top:10px`

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
    padding: 0 10px 0 10px`

const Arrow = styled.img`
    width:9px;
    height:15px;
    cursor:pointer`  

const DescriptionList = styled.div`
    width:95%;
    height:auto;
    background-color:#F7F7F7;
    padding:10px;
    display:flex;
    flex-direction:column;
    `
const Text = styled.span`
    font-size:12px;
    `

function DeployingBannerList({title, lists, text}) {
    const [openBanner, setBanner]=useState(true)
    return (openBanner?(
        <DescriptionArea>
        <DescriptionBanner>
        {title}
        <Arrow src={arrowDown} alt='fleche-bas' onClick={()=>setBanner(false)}/>
        </DescriptionBanner>
        </DescriptionArea>):(<DescriptionArea>
        <DescriptionBanner>
        {title}
        <Arrow src={arrowUp} alt='fleche-haut' onClick={()=>setBanner(true)}/>
        </DescriptionBanner>
        <DescriptionList>{lists?lists.map((list, index)=><Text key={index}>{list}</Text>):<Text>{text}</Text>}</DescriptionList>
        </DescriptionArea>
        ))
}

export default DeployingBannerList