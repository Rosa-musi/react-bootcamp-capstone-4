import styled from 'styled-components'
import {colors} from '../../utils/colors'

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    height: 5rem;
    background-color: ${colors.light};
`

export const FooterText = styled.p`
    margin: 0 2rem;
    @media (max-width: 380px){
        font-size: .9rem;
        
    }
`