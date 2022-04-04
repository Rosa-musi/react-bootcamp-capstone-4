import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { renderContext } from '../../../context/renderContext'
import {
    Text,
    Table,
    Tr,
    InputItems,
    CartContainer,
    ProductContainer,
    ProdImg,
    ProductsContainer,
    CounterContainer,
    TotalPayContainer
} from './styledCart'
import Button from '../../Common/Button/Button'


const Cart = () => {

    const { cartProducts, setCartProducts, total } = useContext(renderContext)
   
    const handleCuantity = (e) => {
        alert("change cuatity")
    }


    const handleRemove = (index) => {
     
/*          const newCartProducts = cartProducts
         newCartProducts.forEach((prod, i) => {
             if (i === index) {
                 newCartProducts.splice(index, 1)
             }
         })
        setCartProducts(newCartProducts)  */
        alert("remove this from the cart")
    }
    console.log(cartProducts)
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
                                <Text onClick={handleCuantity}>-</Text><Text margin>{obj.cuantity}</Text><Text onClick={handleCuantity}>+</Text>
                            </CounterContainer>
                            <Button onClick={() =>handleRemove(i)}>Remove</Button>
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