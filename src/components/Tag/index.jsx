import styled from "styled-components"


const TagStick=styled.span`
width:auto;
height:15px;
border-radius:5px;
background-color:#FF6060;
color:white;
font-size:12px;
text-align:center;
padding:4px 20px 4px 20px;
margin: 10px 10px 10px 0;`

function Tag({tags}) {
    return(
        <TagStick>{tags}</TagStick> 
    )
}

export default Tag