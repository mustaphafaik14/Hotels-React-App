import Styled from 'styled-components'


const StyledHero=Styled.header`
    width: 100%;
    height: 60vh;
    background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.3)) , url(${props => props.img}) center/cover no-repeat;`
 
export default StyledHero