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

