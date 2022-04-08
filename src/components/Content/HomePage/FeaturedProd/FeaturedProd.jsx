import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import {
    FeaturedContainer,
    FeaturedTitle,
    FeaturesDiv,
} from './styledFeaturedProd'
import Button from '../../../Common/Button/Button'
import Card from '../../../Common/Card/Card'
import { useFetch } from '../../../../utils/hooks/useFetch'
import { renderContext } from '../../../../context/renderContext'

const FeaturedProd = () => {

    const [featured, setFeatured] = useState([{}])
    const [maxResults, setMaxResults] = useState([])
    const [data, isLoading, error] = useFetch(`&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16`)
    const {setDetail, handleBuy} = useContext(renderContext)

    const handleDetail = (detailProd) => {
        data.results.forEach(obj => {
           if (obj.id === detailProd.id) {
               setDetail(obj)
           }
       }) 
   }

    useEffect(() => {
        let featuredData = []
            !isLoading && data.results.forEach(featured => {
                featuredData.push({
                name: featured.data.name,
                image: featured.data.mainimage.url,
                category: featured.data.category.slug,
                price: featured.data.price,
                id: featured.id,
                product: featured
                })
            })
        setFeatured(featuredData)
    }, [data.results, isLoading])

    useEffect(() => {
       if (featured.length <= 16){
           setMaxResults(featured)
       } else if (featured.length > 16) {
            setMaxResults(featured.slice(0, 16))
        }
    }, [featured]);

  return (
    <FeaturedContainer>
        <FeaturedTitle>Featured Products</FeaturedTitle>
        <FeaturesDiv>
            {
                maxResults.map(product => {
                    return ( 
                        <Card key={crypto.randomUUID()} buy={() => handleBuy(product.product)} handleDetail={() => handleDetail(product)} {...product}/>
                    )
                })
            }
        </FeaturesDiv>
        <Link to="/products"><Button>View all products</Button></Link>
    </FeaturedContainer>
  )
}

export default FeaturedProd