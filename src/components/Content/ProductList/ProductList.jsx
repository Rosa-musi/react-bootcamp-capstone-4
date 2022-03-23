import React, {useState, useContext, useEffect} from 'react'
import SideBar from './SideBar/SideBar'
import {
    ProdListContainer,
    ListDiv,
    ProdListTitle,
    ProductsDiv,
    PaginationDiv,
    Text,
    StyledIcon,
} from './styledProductList'
import Card from '../../Common/Card/Card'
import { renderContext } from '../../../context/renderContext'

const ProductList = () => {

  const {newProducts, dataProd, setDetail} = useContext(renderContext)
  const [totalPages, setTotalPages] = useState(Math.ceil(newProducts.length / 12))
  const [currentPage, setCurrentPage] = useState(1)
  const [prodPerPage, setProdPerPage] = useState(12)

  // Get Current products
  const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * prodPerPage)
  const [indexOfFirstPost, ] = useState(indexOfLastPost - prodPerPage)
  const [currentPosts, setCurrentPosts] = useState([])

  console.log(Math.ceil(newProducts.length / 12))
  useEffect(() => {
    console.log("a")
   setCurrentPosts(newProducts.slice(indexOfFirstPost, indexOfLastPost))
  },[newProducts, indexOfFirstPost, indexOfLastPost])
  
  const handleDetail = (detailProd) => {
     dataProd.results.forEach(obj => {
       if (obj.id === detailProd.id) {
           setDetail(obj)
       }
   })  
}

 const handlePrev = () => {
  if (currentPage > 1) {
    setCurrentPage( (prevState) => prevState - 1)
  }
 }

 const handleNext = () => {
  if (newProducts.length > indexOfLastPost) {
    setCurrentPage( (prevState) => {
        return(
          prevState + 1
        )
    })
  }  else if (newProducts.length > indexOfLastPost && products.length < currentPage + 1) {
    setCurrentPage( (prevState) => {
        return(
          prevState + 1
        )
    })
      setCurrentPosts(products.slice(indexOfFirstPost, products.length))
    } 
 }

 useEffect(() => {
   setIndexOfLastPost(currentPage * prodPerPage)
   setTotalPages(Math.ceil(newProducts.length / 12))
 }, [currentPage, prodPerPage, totalPages, newProducts.length])

  return (
    <ProdListContainer>
        <SideBar/>
        <ListDiv>
            <ProdListTitle>Products List</ProdListTitle>
            <ProductsDiv>
              {currentPosts.length === 0 ? 
                <ProdListTitle>There are no products in those categories</ProdListTitle> :
                currentPosts.map(product => {
                  return(
                    <Card key={crypto.randomUUID()}  handleDetail={() => handleDetail(product)} {...product}/>
                  )
                })
              }
            </ProductsDiv>
            <PaginationDiv>
              <StyledIcon
                icon="fa-solid fa-chevron-left" 
                onClick={handlePrev}
                className={currentPage < 2 && "hide"}
              />
              <Text>{currentPage} / {totalPages}</Text>
              <StyledIcon
                icon="fa-solid fa-chevron-right"
                onClick={handleNext}
                className={currentPage === totalPages && "hide"}
              />
            </PaginationDiv>
        </ListDiv>
    </ProdListContainer>
  )
}

export default ProductList