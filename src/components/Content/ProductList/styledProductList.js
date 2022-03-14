import styled from 'styled-components'
import {colors} from '../../../utils/colors'

export const ProdListContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 90vh;
    background-color: ${colors.light};
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`
export const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;

`

export const ProdListTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colors.text};
    margin-top: 3rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    @media (max-width: 380px){
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
`
export const ProductsDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 2.5rem;
    width: 100%;
    @media (max-width: 768px){
        width: 100%;
    }
`

export const PaginationDiv = styled.div`
    display: flex;
    width: 95%;
    height: auto;
    margin: 1rem;
    justify-content: space-between;
`

