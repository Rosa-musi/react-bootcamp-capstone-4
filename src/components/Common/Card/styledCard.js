import styled from 'styled-components'
import {colors} from '../../../utils/colors'

export const CardDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: -8px 10px 5px 2px rgba(130,130,130,0.66);
width: 15rem;
margin: 1rem;
border-radius: 1rem;
cursor: pointer;
@media (max-width: 380px){
    width: 6rem;
    box-shadow: -4px 4px 5px 2px rgba(130,130,130,0.66); 
    width: 80%;
}
`
export const CardImg = styled.img`
width: 100%;
border-radius: 1rem;
`
export const CardTextDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 6rem;
background-color: white;
border-radius: 1rem;
`
export const Text = styled.p`
color: ${colors.text};
margin-block-start: 0;
margin-block-end: 0;
font-weight: ${props => props.titl && "bolder"};
margin-left: .5rem;

@media (max-width: 380px){
    width: 100%;
    font-size: 1rem;
}
`