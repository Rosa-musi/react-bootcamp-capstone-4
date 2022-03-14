import styled from 'styled-components'
import { colors } from '../../../../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SideBarWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;
    height: fit-content;
    background-color: ${colors.light};
    @media (max-width: 768px){
        width: 100%;
    }
` 

export const SideBarContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 8rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    border-radius: 1rem;
    background-color: white;
    @media (max-width: 768px){
        margin-top: 2rem;
        flex-direction: row;
        width: 90%;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

    }
`

export const ProdListTitle = styled.h2`
    font-size: 1.3rem;
    font-weight: bold;
    color: ${colors.text};
    margin-bottom: .8rem;
    margin-left: 1rem;
    @media (max-width: 768px){
        display: none;
    }

`

export const CheckClass = styled.input`
        &:checked{
        background-color: red;
    }
`



export const Text = styled.p.attrs(props => ({
    className: props.className,
}))`

     &.true{
        border: 1px solid ${colors.accent};
        border-radius: .5rem;
        width: fit-content;
        background-color: ${colors.accent};
        color: white;
    } 

    color: ${colors.text};
    margin: .4rem 1rem;
    cursor: pointer;
    padding: .1rem;
    border: 1px solid white;

    &:hover {
        border: 1px solid ${colors.accent};
        border-radius: .5rem;
        width: fit-content;
    }
    @media (max-width: 768px){
        margin-top: 0;
        padding: .3rem;
    }

` 



