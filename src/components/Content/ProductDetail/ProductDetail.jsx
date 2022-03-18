import React, {useContext, useState} from 'react'
import { renderContext } from '../../../context/renderContext'
import Button from '../../Common/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {colors} from '../../../utils/colors'
import { 
    ProdDetContainer, 
    SwiperContainer,
    ImageDiv,
    Images,
    BuyDiv,
    Text,
    DescriptionDiv,
    Divider,
    Table,
    Tr,
    InputDiv,
    InputItems,
} from './styledProductDetail'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import 'swiper/css/bundle';
SwiperCore.use([Navigation, Controller, Thumbs]);

import './clases.css'

const ProductDetail = () => {

    const {detail} = useContext(renderContext)
    const [product, setProduct] = useState(detail[0])

    console.log(product)
    console.log(detail)
  return (
    <ProdDetContainer>
        <Text bold title list>{product.data.name}</Text>
        <SwiperContainer>
          <Swiper
            id="main"
            navigation
            spaceBetween={0}
            slidesPerView={1}
            style={{"--swiper-navigation-color": colors.textLogo}}
            onInit={(swiper) => console.log("Swiper initialized!", swiper)}
            onSlideChange={(swiper) => {
            console.log("Slide index changed to: ", swiper.activeIndex);
            }}
            onReachEnd={() => console.log("Swiper end reached")}
            >
                {product.data.images.map(imag => {
                    return(
                        <SwiperSlide  key={crypto.randomUUID()}>
                            <ImageDiv>
                             <Images
                                src={imag.image.url}
                                alt={product.data.name}
                                className='imagen'
                            /> 
                            </ImageDiv>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SwiperContainer> 
        
        <BuyDiv>
            <InputDiv>
                <Text bold list input>Items</Text>
                <InputItems type="number"/>
            </InputDiv>
            <Button center>add to cart            
                <FontAwesomeIcon 
                    icon="shopping-cart" 
                    style={{
                    color: colors.textLogo, 
                    marginLeft: "1rem",
                    cursor: "pointer",
                    }}
                />
            </Button>

            
        </BuyDiv>


        <DescriptionDiv>
            <Divider></Divider>
            <Text><Text bold as="span">Name: </Text>{product.data.name}</Text>
            <Text><Text bold as="span">Price: </Text>{product.data.price}</Text>
            <Text><Text bold as="span">Sku: </Text>{product.data.sku}</Text>
            <Text><Text bold as="span">Category: </Text>{product.data.category.slug}</Text>
            <Text><Text bold as="span">Items: </Text>{product.data.stock}</Text>
            <Text bold list as="span">Tags: </Text>
            {product.tags.map (tag => <Text list key={crypto.randomUUID()}>{tag}</Text>)}
        

            <Divider between></Divider>
            <Text bold list> Description: </Text>
            <Text>{product.data.description[0].text}</Text>
            
            <Divider between></Divider>
            <Text bold as="span">Specs: </Text>
            <Table>
                {product.data.specs.map(spc => {
                    return(
                        <Tr as="tr" key={crypto.randomUUID()}>
                            <Tr td name as="td">{spc.spec_name}</Tr><Tr as="td">{spc.spec_value}</Tr>
                        </Tr>
                    )
                })}
            </Table>
        </DescriptionDiv>
    </ProdDetContainer>
  )
}

export default ProductDetail