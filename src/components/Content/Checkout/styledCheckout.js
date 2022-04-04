import styled from 'styled-components'
import { colors } from '../../../utils/colors'

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.light};
`

export const CustomerForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 2rem 4rem;
    width: 70%;
`
export const Text = styled.p`
    font-size: ${props => props.title ? "1.8rem" : "1.2rem"};
    color: ${colors.text};
    font-weight: ${props => props.bold && "bolder"};
    margin: ${props => props.margin && "1rem"};
    margin-top: ${props => props.marTop && "2rem"};
    align-self: ${props => props.start && "flex-start"};

    @media (max-width: 768px){
        font-size: ${props => props.title ? "1.6rem" : "1rem"};
        margin-top: ${props => props.marTop && "0"};
    }
`
export const InputForm = styled.input`
    width: 100%;
    border-radius: .5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: ${props => props.hei && "6rem"};
`
export const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    width: 80%;
    @media (max-width: 768px){
        width: 100%;
    }
`
export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: fit-content;
    @media (max-width: 768px){
        margin-bottom: 2rem;
    }
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