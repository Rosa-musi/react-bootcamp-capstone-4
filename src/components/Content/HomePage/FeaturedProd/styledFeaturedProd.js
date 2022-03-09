import styled from 'styled-components'
import {colors} from '../../../../utils/colors'

export const FeaturedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    background-color: ${colors.light};
    @media (max-width: 380px){
        padding-top: 1rem;
    }
`
export const FeaturedTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.text};
    margin-top: 3rem;
    margin-bottom: 2rem;
    @media (max-width: 380px){
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
`

export const FeaturesDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 2.5rem;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const FeaturedDiv = styled.div`
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
export const FeaturedImg = styled.img`
    width: 100%;
    border-radius: 1rem;
`
export const FeaturedTextDiv = styled.div`
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