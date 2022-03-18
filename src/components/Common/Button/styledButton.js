import styled from 'styled-components'
import {colors} from '../../../utils/colors'

export const GeneralButton = styled.button`

    border: solid 2px ${colors.accent};
    font-size: 1.2rem;
    font-weight: bolder;
    background-color: white;
    border-radius: 1rem;
    padding: .7rem;
    box-shadow: -4px 4px 5px 2px rgba(130,130,130,0.66); 
    color: ${colors.textLogo};
    cursor: pointer;
    width: fit-content;
    align-self: center;

    &:hover {
        background-color: ${colors.brown};
        border: solid 2px ${colors.brown};
        color: white;
    }
    @media (max-width: 380px){
        font-size: 1.1rem;
        //align-self: ${props => props.start &&  "flex-start"};
        padding: .5rem;
    }
`