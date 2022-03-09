import styled from 'styled-components'
import { colors } from '../../../../utils/colors'

export const SideBarContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20%;
`

export const Text = styled.p`
    color: ${colors.text};
    margin: .5rem 1rem;

    @media (max-width: 380px){
        width: 100%;
        font-size: 1rem;
    }
`