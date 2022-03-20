import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/productDetail"><CardImg src={image} alt={name} /></Link>
        <CardTextDiv>
            <Text titl margBot>{name}</Text> 
            <Text>{category}</Text>
            <Text>${price}</Text> 
            <Link to="/productDetail"><DetailLink margBot>Detail page</DetailLink></Link>
            <Button marTop>add to cart            
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