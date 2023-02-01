//Construction carroussel d'image pour page Appart

//Importation des éléments à utiliser 
import styled from "styled-components"
import leftArrow from '../../assets/left-arrow.svg'
import rigthArrow from '../../assets/right-arrow.svg'
import {useState} from "react"

//Construction du DOM + CSS via styled-component
const CarrousselArea = styled.div`
    width:92%;
    height:255px;
@media all and (min-width:768px){
    height:415px;
  }`
const CarrousselImg = styled.img`
    width:100%;
    height:255px;
    border-radius:10px;
    object-fit:cover;
    z-index:-10000;
    @media all and (min-width:768px){
        height:415px;
      }
`
const ArrowArea = styled.div`
    position:relative;
    bottom:55%;
    width:100%;
    height:30px;
    display:flex;
    justify-content:space-between;
    @media all and (min-width:768px){
        bottom:60%;
      };
      ${(props)=>props.$nbImg===1&&`
      display:none`}
`
const CarrousselArrow = styled.img` 
    width:12px;
    height:20px;
    cursor:pointer;
    @media all and (min-width:768px){
       height:80px;
       width:47px;
      }
    `
//Création du composant React  Carroussel utilisant la props image
function Carroussel({image}) {
    //Utilisation du state pour gestion de l'index de l'image
    const [photo, setPhoto]=useState(0)
    const length = image.length
    //Fonctions de défilement en boucle des images selon le sens (suivant ou précedent)
    function NextPicture() {
        setPhoto(photo===length-1? 0 : photo+1)
    } 
    function PreviousPicture() {
        setPhoto(photo===0?length-1 : photo-1)
    }
    //Construction du carroussel selon présence de ressources ou non
    return(
    length>=1 &&
    <CarrousselArea>
    <CarrousselImg src={image[photo]} alt='photo appart'/>
    <ArrowArea $nbImg={length}>
    <CarrousselArrow src={leftArrow} alt='fleche gauche' onClick={() => NextPicture()} />
    <CarrousselArrow src={rigthArrow} alt='fleche droite' onClick={() => PreviousPicture()} />
    </ArrowArea>
    </CarrousselArea>
    )
}
export default Carroussel