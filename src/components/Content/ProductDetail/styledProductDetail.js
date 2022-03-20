import styled from 'styled-components'
import { colors } from '../../../utils/colors'

export const ProdDetContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
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
    }
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 33rem;

`

export const Images = styled.img`
    height: 80%;
    @media (max-width: 380px){
        width: 70%;
    }
`
export const BuyDiv = styled.div`
    width: 40%;
    height: fit-content;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
export const InputDiv = styled.div`
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: .8rem;

    @media (max-width: 768px){
        margin-bottom: 1rem;
        padding-top: 0;
    }
`

export const InputItems = styled.input`
    width: 2.5rem;
`

export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 4rem;

    @media (max-width: 380px){
        margin: 2rem;

    }
`

export const Text = styled.p`
    font-size: ${props => props.title ? "1.8rem" : "1.2rem"};
    color: ${colors.text};
    font-weight: ${props => props.bold && "bolder"};
    margin-bottom:  ${props => props.list ? "0" : "1rem"};
    margin-right:  ${props => props.input && "1rem"};
    
    
    @media (max-width: 380px){
        font-size: ${props => props.title ? "1.6rem" : "1rem"};
    }
`

export const Divider = styled.div`
    width: 100%;
    height: .15rem;
    background-color: ${colors.textLogo};
    border-radius: 1rem;
    align-self: center;
    margin-bottom: 3rem;
    margin-top: ${props => props.between ? "2rem" : "0"};
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
`