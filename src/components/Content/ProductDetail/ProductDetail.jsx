import React, {useContext, useState } from 'react'
import { Link } from 'react-router-dom'
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

const ProductDetail = () => {

    const {detail, cartProducts, setCartProducts } = useContext(renderContext)
    const [valueInput, setValueInput] = useState("")

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }

    const handleBuy = () => {
        if(valueInput <= 0){
            alert("please set a quantity of products")
        } else if (valueInput <= detail.data.stock){

            setCartProducts([...cartProducts, {product: detail, cuantity: parseInt(valueInput)}])
        }
        setValueInput(0)
    }
 
  return (
    <ProdDetContainer>
        <Text bold title="true" list="true">{detail.data.name}</Text>
        <SwiperContainer>
          <Swiper
            id="main"
            navigation
            spaceBetween={0}
            slidesPerView={1}
            style={{"--swiper-navigation-color": colors.textLogo}}
            >
                {detail.data.images.map(imag => {
                    return(
                        <SwiperSlide  key={crypto.randomUUID()}>
                            <ImageDiv>
                             <Images
                                src={imag.image.url}
                                alt={detail.data.name}
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
                <Text bold list="true" input>Items</Text>
                <InputItems 
                    type="number"
                    onChange={handleChange}
                    value={valueInput}
                />
            </InputDiv>
            {
                valueInput > detail.data.stock ?
                <Text>we only have {detail.data.stock} products in stock</Text> :
                <Link to="/cart"><Button 
                    center
                    onClick={handleBuy}
                >add to cart            
                    <FontAwesomeIcon 
                        icon="shopping-cart" 
                        style={{
                        color: colors.textLogo, 
                        marginLeft: "1rem",
                        cursor: "pointer",
                        }}
                    />
                </Button></Link>
            }
            
        </BuyDiv>


        <DescriptionDiv>
            <Divider></Divider>
            <Text><Text bold as="span">Name: </Text>{detail.data.name}</Text>
            <Text><Text bold as="span">Price: </Text>{detail.data.price}</Text>
            <Text><Text bold as="span">Sku: </Text>{detail.data.sku}</Text>
            <Text><Text bold as="span">Category: </Text>{detail.data.category.slug}</Text>
            <Text><Text bold as="span">Items: </Text>{detail.data.stock}</Text>
            <Text bold list="true" as="span">Tags: </Text>
            {detail.tags.map (tag => <Text list="true" key={crypto.randomUUID()}>{tag}</Text>)}
        

            <Divider between></Divider>
            <Text bold list="true"> Description: </Text>
            <Text>{detail.data.description[0].text}</Text>
            
            <Divider between></Divider>
            <Text bold as="span">Specs: </Text>
            <Table>
                <Tr as="thead">
                    <Tr as="tr">
                        <Tr name="true"  as="th">spec</Tr>
                        <Tr  as="th">description</Tr>
                    </Tr>
                </Tr>
                <Tr as="tbody">
                {detail.data.specs.map(spc => {
                    return(
                        <Tr as="tr" key={crypto.randomUUID()}>
                            <Tr td name="true" as="td">{spc.spec_name}</Tr><Tr as="td">{spc.spec_value}</Tr>
                        </Tr>
                    )
                })}
                </Tr>
            </Table>
        </DescriptionDiv>
    </ProdDetContainer>
  )
}

export default ProductDetail