import styled from 'styled-components'
import {colors} from '../../../../utils/colors'

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    padding-bottom: 4rem;
    
    @media (max-width: 380px){
        padding-top: 1rem;
    }
`
export const CategoriesTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.text};
    margin-bottom: 2rem;
    @media (max-width: 380px){
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`
export const CategoriesDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 90%;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const CategoryDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    position: relative;
    margin: .8rem;
    border-radius: 1rem;
    cursor: pointer;
    box-shadow: -8px 10px 5px 2px rgba(130,130,130,0.66);
    @media (max-width: 380px){
        width: 6rem;
        box-shadow: -4px 4px 5px 2px rgba(130,130,130,0.66); 
    }
`
export const CategoryImg = styled.img`
    width: 100%;
    border-radius: 1rem;
    opacity: .6;
`
export const CategoryTitle = styled.h3`
position: absolute;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${colors.text};
    @media (max-width: 380px){
        font-size: .9rem;
    }
`
