import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {
  CartContainer,
  CustomerForm,
  InputForm,
  Text,
  ProductsContainer,
  ProductContainer,
  TotalPayContainer
} from './styledCheckout'
import Button from '../../Common/Button/Button'
import { renderContext } from '../../../context/renderContext'


const Checkout = () => {

  const { cartProducts, total } = useContext(renderContext)

  return (
    <CartContainer>
        <CustomerForm>
          <Text start bold="true">name</Text>
          <InputForm type="text"/>
          <Text start bold="true">email</Text>
          <InputForm type="text"/>
          <Text start bold="true">post/zip code</Text>
          <InputForm type="text"/>
          <Text start bold="true">order notes</Text>
          <InputForm hei type="texarea" rows="10"/>
        </CustomerForm>
        <ProductsContainer>
        {
            cartProducts.length > 0 ?
                cartProducts.map( (obj, i) => {
                    return(
                        <ProductContainer key={i}>
                            <Text>{obj.product.data.name}</Text>
                            <Text>${obj.product.data.price}</Text>
                            <Text margin>{obj.cuantity}</Text>
                            <Text marTop>${obj.product.data.price * obj.cuantity}</Text>
                        </ProductContainer>
                    )
                })
                :
                <Text>you don't have items in the shopping cart</Text>
        }
                <TotalPayContainer>
          <Text margin bold="true">Total: ${total}</Text>
          <Link to={"/cart"}><Button>Go back to cart</Button></Link>
          <Button>Place order</Button>
        </TotalPayContainer>
        </ProductsContainer>

    </CartContainer>
  )
}

export default Checkout