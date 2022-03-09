import SideBar from './SideBar/SideBar'
import {
    ProdListContainer,
    ListDiv,
    ProdListTitle,
} from './styledProductList'

const ProductList = () => {
  return (
    <ProdListContainer>
        <SideBar/>
        <ListDiv>
            <ProdListTitle>This is the Product List Page</ProdListTitle>
        </ListDiv>
        
        
        
    </ProdListContainer>
  )
}

export default ProductList