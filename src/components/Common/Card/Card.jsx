import React from 'react'
import {
    CardDiv, 
    CardImg,
    CardTextDiv,
    Text,
    DetailLink,
} from './styledCard'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {colors} from '../../../utils/colors'

const Card = ({image, name, category, price}) => {
  return (
    <CardDiv>
        <CardImg src={image} alt={name}/>
        <CardTextDiv>
            <Text titl>{name}</Text> 
            <Text>{category}</Text>
            <Text>${price}</Text> 
            <DetailLink>Detail page</DetailLink>
            <Button>add to cart            
              <FontAwesomeIcon 
                icon="shopping-cart" 
                style={{
                  color: colors.textLogo, 
                  marginLeft: "1rem",
                  cursor: "pointer",
                }}
            /></Button>
        </CardTextDiv>
  
    </CardDiv>
  )
}

export default Card