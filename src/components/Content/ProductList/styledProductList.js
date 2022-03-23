import styled from 'styled-components'
import {colors} from '../../../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



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

    @media (max-width: 768px){
        align-items: center;
    }
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
        margin-top: 1.3rem;
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

export const Text = styled.p`

    color: ${colors.text};
    margin: .4rem 1rem;
    cursor: pointer;
    padding: .1rem;
    font-size: 1.4rem;

 
    @media (max-width: 768px){
        margin-top: 0;
        padding: .3rem;
    }

` 

export const StyledIcon = styled(FontAwesomeIcon).attrs(props => ({
    className: props.className,
}))`

    &.hide{
        visibility: hidden;
    }

    color: ${colors.textLogo};
    cursor: pointer;
    font-size: 3rem;

    @media (max-width: 380px){
        font-size: 2.5rem;

    }
`