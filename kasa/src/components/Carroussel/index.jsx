import styled from "styled-components"
import leftArrow from '../../assets/left-arrow.svg'
import rigthArrow from '../../assets/right-arrow.svg'
import { useState} from "react"

const CarrousselImg = styled.div`
    width:92%;
    height:255px;
    border-radius:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition: all 400ms linear;
${(props) =>
    props.$image &&`
    background-image:url(${props.$image});
    background-repeat: no-repeat;
    background-size: cover;`
}`
const CarrousselArrow = styled.img`
    width:12px;
    height:20px;
    cursor:pointer
    `

function Carroussel({image}) {
    const [photo, setPhoto]=useState(0)
    const length = image.length
    function NextPicture() {
        setPhoto(photo===length-1? 0 : photo+1)
    } 
    function PreviousPicture() {
        setPhoto(photo===0?length-1 : photo-1)
    }
    return(
    <CarrousselImg $image={image[photo]}>
    {length>1&&
    <><CarrousselArrow src={leftArrow} alt='fleche gauche' onClick={() => NextPicture()} />
    <CarrousselArrow src={rigthArrow} alt='fleche droite' onClick={() => PreviousPicture()} /></>}
    </CarrousselImg>
    )
}
export default Carroussel