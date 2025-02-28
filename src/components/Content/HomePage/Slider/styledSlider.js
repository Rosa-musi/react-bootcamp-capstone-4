import styled from 'styled-components'
import {colors} from '../../../../utils/colors'

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: ${colors.light};
    @media (max-width: 380px){
        margin-top: .8rem;
    }

`
export const ImgBanerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: 100%;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const SwiperContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 20rem;
    margin-bottom: 3rem;
    @media (max-width: 768px){
        width: 100%;
        margin-bottom: 1rem;
        height: fit-content;
    }
`
export const CarouselImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 1rem;
`
export const TextDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    background-color: ${colors.accentOp};
    border-radius: 1rem;
    opacity: 80%;
`
export const Text = styled.p`
    color: white;
    font-weight: ${props => props.titl && "bolder"};
    margin: 1rem;
    font-size: ${props => props.description ? "1.1rem": "1.5rem"};

    @media (max-width: 768px){
        display: ${props => props.description && "none"}
    }
    @media (max-width: 380px){
        width: 100%;
        font-size: .9rem;
    }
`

