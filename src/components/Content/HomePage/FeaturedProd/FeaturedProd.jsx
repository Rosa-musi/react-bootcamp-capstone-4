import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
    FeaturedContainer,
    FeaturedTitle,
    FeaturesDiv,
} from './styledFeaturedProd'
import Data from '../../../../mocks/en-us/featured-products.json'
import Button from '../../../Common/Button/Button'
import Card from '../../../Common/Card/Card'

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
    const [maxResults, setMaxResults] = useState([])

    useEffect(() => {
       if (featured.length <= 16){
           setMaxResults(featured)
       } else if (featured.length > 16) {
            setMaxResults(featured.slice(0, 16))
        }
    }, [featured]);

   console.log(maxResults)
  return (
    <FeaturedContainer>
        <FeaturedTitle>Featured Products</FeaturedTitle>
        <FeaturesDiv>
            {
                maxResults.map(product => {
                    return (
                        <Card key={crypto.randomUUID()} {...product}/>
                    )
                })
            }
        </FeaturesDiv>
        <Link to="/products"><Button>View all products</Button></Link>
    </FeaturedContainer>
  )
}

export default FeaturedProd