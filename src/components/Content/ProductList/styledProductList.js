import styled from 'styled-components'
import {colors} from '../../../utils/colors'

export const ProdListContainer = styled.div`
    display: flex;
    width: 100%;
`
export const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: auto;
`

export const ProdListTitle = styled.h2`
    font-size: ${props => props.categories ? "1.3rem" : "1.8rem"};
    font-weight: bold;
    color: ${colors.text};
    margin-top: ${props => props.categories ? "3.9rem" : "3rem"};
    margin-bottom: ${props => props.categories ? ".8rem" : "2rem"};
    margin-left: 1rem;
    @media (max-width: 380px){
        font-size: 1.5rem;
        margin-top: 1rem;
        margin-bottom: .5rem;
    }
`