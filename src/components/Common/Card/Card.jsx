import React from 'react'
import {
    CardDiv, 
    CardImg,
    CardTextDiv,
    Text,
} from './styledCard'

const Card = ({image, name, category, price}) => {
  return (
    <CardDiv>
        <CardImg src={image} alt={name}/>
        <CardTextDiv>
            <Text titl>{name}</Text> 
            <Text>{category}</Text>
            <Text>${price}</Text> 
        </CardTextDiv>
    </CardDiv>
  )
}

export default Card