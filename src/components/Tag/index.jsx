//Construction Tag

//Importation des éléments à utiliser 
import styled from "styled-components"

//Construction du DOM + CSS via styled-component
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
/*Création composant React Tag pour l'affichage des tags pour chaque appart*/
function Tag({tags}) {
    return(
        <TagStick>{tags}</TagStick> 
    )
}

export default Tag