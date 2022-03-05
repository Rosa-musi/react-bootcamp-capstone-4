import styled from 'styled-components'
import {colors} from '../../../utils/colors'

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    margin-top: 3rem;
`
export const ImgBanerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: 60%;
`
export const CarouselImg = styled.img`
    
    width: 100%;
    height: auto;
    border-radius: 1rem;
`
export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: ${colors.accentOp};
    border-radius: 1rem;
    position: absolute;
    opacity: 80%;
`
export const Text = styled.p`
    color: white;
    font-weight: ${props => props.title && "bolder"};
    margin: 1REM;

`

