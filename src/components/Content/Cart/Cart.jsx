import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { renderContext } from '../../../context/renderContext'
import {
    Text,
    CartContainer,
    ProductContainer,
    ProdImg,
    ProductsContainer,
    CounterContainer,
    TotalPayContainer,
    CuantityItems
} from './styledCart'
import Button from '../../Common/Button/Button'


const Cart = () => {

    const { cartProducts, setCartProducts, total } = useContext(renderContext)
   
    const handleLes = (item, operator, index ) => {
       
        const newCartProducts = cartProducts.map((prod, i) => {
             if (i === index) {
                console.log(prod)
                 if(operator === "-"){
                    prod.cuantity = item.cuantity - 1
                 } else if (operator === "+"){
                    prod.cuantity = item.cuantity + 1
                 }
             }
             return prod
         })
        setCartProducts(newCartProducts)
    }
    const handleRemove = (item, index) => {
        let result = []
        cartProducts.map( (prod, i) => {
            if(prod.product.id !== item.product.id){
                result.push(prod)
            }
            return prod
        })
        setCartProducts(result)
    }
  return (
    <CartContainer>
        <ProductsContainer>
        {
            cartProducts.length > 0 ?
                cartProducts.map( (obj, i) => {
                    return(
                        <ProductContainer key={i}>
                            <ProdImg src={obj.product.data.mainimage.url}/>
                            <Text>{obj.product.data.name}</Text>
                            <Text>${obj.product.data.price}</Text>
                            <CounterContainer>
                                <CuantityItems 
                                    onClick={() => handleLes(obj, "-", i)} 
                                    style={{display: obj.cuantity === 1 && "none"}}
                                >-</CuantityItems>
                                <Text margin>{obj.cuantity}</Text>
                                <CuantityItems 
                                    style={{display: obj.product.data.stock === obj.cuantity && "none"}}
                                    onClick={() => handleLes(obj, "+", i)}
                                >+</CuantityItems>
                            </CounterContainer>
                            <Button onClick={() =>handleRemove(obj, i)}>Remove</Button>
                            <Text marTop>${obj.product.data.price * obj.cuantity}</Text>
                        </ProductContainer>
                    ) 
                })
                :
                <Text>you don't have items in the shopping cart</Text>
        }
        <TotalPayContainer>
        <Text margin bold="true">Total: ${total}</Text>
        <Link to={"/checkout"}><Button>Proceed to checkout</Button></Link>
        </TotalPayContainer>
        
        </ProductsContainer>
    </CartContainer>
  )
}

export default Cart