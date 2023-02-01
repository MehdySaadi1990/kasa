import styled from 'styled-components';

const Star = styled.img`
width:15px;
height:15px;
@media all and (min-width:768px){
    width:30px;
    height:30px;
  }`

const RateArea = styled.p`
width:auto;
height:auto;

`

function Rating({rating, redstar, greystar}) {
    const scales =[1,2,3,4,5]
    return(
        <RateArea>
        {scales.map((scale)=>rating>=scale?<Star key={scale.toString()} src={redstar} alt='etoile-rouge'/>:<Star key={scale.toString()} src={greystar} alt='etoile-grise'/>)}
        </RateArea>
    )
    
}

export default Rating