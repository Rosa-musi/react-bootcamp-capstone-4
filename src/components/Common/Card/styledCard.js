import { faBold } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import {colors} from '../../../utils/colors'
import { Link } from 'react-router-dom'

export const CardDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: -8px 10px 5px 2px rgba(130,130,130,0.66);
width: 15rem;
height: fit-content;
margin: 1rem;
border-radius: 1rem;
padding-bottom: 1rem;
background-color: white;
@media (max-width: 380px){
    width: 12rem;
    box-shadow: -4px 4px 5px 2px rgba(130,130,130,0.66); 
    flex-direction: row;
    width: 17.5rem;
    padding-bottom: .5rem;
}
`
export const CardImg = styled.img`
width: 100%;
border-radius: 1rem;

cursor: pointer;
    @media (max-width: 380px){
        width: 8rem;
    }
`
export const CardTextDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: fit-content;
background-color: white;
border-radius: 1rem;
word-wrap: break-word;
`
export const Text = styled.p`
color: ${colors.text};
margin-block-start: 0;
margin-block-end: 0;
font-weight: ${props => props.titl && "bolder"};
margin-left: .5rem;
margin-bottom: ${props => props.margBot && ".5rem"};

@media (max-width: 380px){
    width: 100%;
    font-size: 1rem;
}
`
export const DetailLink = styled.p`
    margin-left: .5rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    cursor: pointer;
    align-self: center;
    color: ${colors.textLogo};
    font-weight: bolder;
    margin-bottom: ${props => props.margBot && "1rem"};

    &:hover {
        text-decoration: underline ${colors.textLogo}
    }

    @media (max-width: 380px){
    width: 100%;
    font-size: 1rem;
}
`

export const LinkRouter = styled(Link).attrs(props => ({
    className: props.className,
}))`

    &.hide{
        display: none;
    }
`




