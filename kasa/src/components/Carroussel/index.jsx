import styled from "styled-components"
import leftArrow from '../../assets/left-arrow.svg'
import rigthArrow from '../../assets/right-arrow.svg'

const CarrousselImg = styled.div`
width:92%;
height:255px;
border-radius:10px;
display:flex;
justify-content:space-between;
align-items:center;
${(props) =>
    props.$image &&
    `background-image:url(${props.$image});
    background-repeat: no-repeat;
    background-size: cover;`
}`
const CarrousselArrow = styled.img`
width:12px;
height:20px;
cursor:pointer`

function Carroussel({image}) {
    
    return(
    <CarrousselImg $image={image}>
    <CarrousselArrow src={leftArrow} alt='photo de presentation appart'/>
    <CarrousselArrow src={rigthArrow} alt='photo de presentation appart'/>
    </CarrousselImg>
    )
}
export default Carroussel