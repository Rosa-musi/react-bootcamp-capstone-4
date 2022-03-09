import React, {useState, useContext} from 'react'
import {
    FeaturedContainer,
    FeaturedTitle,
    FeaturesDiv,
    FeaturedDiv,
    FeaturedImg,
    FeaturedTextDiv,
    Text,
} from './styledFeaturedProd'
import Data from '../../../../mocks/en-us/featured-products.json'
import Button from '../../../Common/Button/Button'
import {renderContext} from '../../../../context/renderContext'

const featuredData = []
Data.results.forEach(featured => {
    featuredData.push({
       name: featured.data.name,
       image: featured.data.mainimage.url,
       category: featured.data.category.slug,
       price: featured.data.price,
    })
    
})

const FeaturedProd = () => {

    const [featured, setFeatured] = useState(featuredData)
    const {renderProductList, setRenderProductList} = useContext(renderContext)
 
    const handleButton = () => {
        setRenderProductList(true)
    }
  return (
    <FeaturedContainer>
        <FeaturedTitle>Featured Products</FeaturedTitle>
        <FeaturesDiv>
            {
                featured.map(product => {
                    return (
                        <FeaturedDiv key={crypto.randomUUID()}>
                            <FeaturedImg src={product.image} alt={product.name}/>
                            <FeaturedTextDiv>
                                <Text titl>{product.name}</Text> 
                                <Text>{product.category}</Text>
                                <Text>${product.price}</Text> 
                            </FeaturedTextDiv>
                        </FeaturedDiv>
                    )
                })
            }
        </FeaturesDiv>
        <Button onClick={handleButton}>View all products</Button>
    </FeaturedContainer>
  )
}

export default FeaturedProd