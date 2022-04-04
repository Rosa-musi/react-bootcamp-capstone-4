import styled from 'styled-components'
import { colors } from '../../../utils/colors'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.light};
`

export const Text = styled.p`
    font-size: ${props => props.title ? "1.8rem" : "1.2rem"};
    color: ${colors.text};
    font-weight: ${props => props.bold && "bolder"};
    margin: ${props => props.margin && "1rem"};
    margin-top: ${props => props.marTop && "2rem"};

    @media (max-width: 380px){
        font-size: ${props => props.title ? "1.6rem" : "1rem"};
    }
`
export const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 90%;
`
export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: fit-content;
    @media (max-width: 768px){
        flex-direction: column;
        margin-bottom: 2rem;
    }
`

export const ProdImg = styled.img`
    width: 6rem;
`
export const CounterContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Table = styled.table`
    width: fit-content;
    margin-bottom: 2rem;
    border: 1px solid ${colors.text.logo};
    border-radius: 1rem;
    padding: .5rem;
`
export const Tr = styled(Text)`
    width: auto;
    background-color: ${props => props.name ? colors.light : "white"};
    padding-right: ${props => props.td ? "3rem" : "0"};
    border-bottom: ${props => props.line && "1px solid black"};
    text-align: left;
`

export const InputItems = styled.input`
    width: 2.5rem;
`

export const TotalPayContainer = styled.div`
    display: flex;
    align-items: flex-end; 
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 90%;
    @media (max-width: 768px){
        align-items: center;
        margin-top: 1rem;
    }
`