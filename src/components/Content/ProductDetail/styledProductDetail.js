import styled from 'styled-components'
import { colors } from '../../../utils/colors'

export const ProdDetContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SwiperContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 20rem;
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 33rem;
`

export const Images = styled.img`
    height: 80%;
`

export const DescriptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

export const Text = styled.p`
    color: ${colors.text};
    margin-left: ${props => props.li ? "2rem" : ".5rem"};
    font-weight: ${props => props.bold && "bolder"};
    @media (max-width: 380px){
        width: 100%;
        font-size: 1rem;
    }
`
export const Boldy = styled(Text)`
    font-weight: bolder;
`