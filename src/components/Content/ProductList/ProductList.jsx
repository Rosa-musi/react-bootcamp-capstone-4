import React, {useState, useContext, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'

import SideBar from './SideBar/SideBar'
import Card from '../../Common/Card/Card'
import {
    ProdListContainer,
    ListDiv,
    ProdListTitle,
    ProductsDiv,
    PaginationDiv,
    Text,
    StyledIcon,
} from './styledProductList'

import { renderContext } from '../../../context/renderContext'


const ProductList = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const {newProducts, dataProd, setDetail, slugs, setSlugs, filters} = useContext(renderContext)
  const [totalPages, setTotalPages] = useState(Math.ceil(newProducts.length / 12))
  const [currentPage, setCurrentPage] = useState(1)
  const [prodPerPage, setProdPerPage] = useState(12)

  // Get Current products
  const [indexOfLastProd, setIndexOfLastProd] = useState(currentPage * prodPerPage)
  const [indexOfFirstProd, setIndexOfFirstProd] = useState(0)
  const [currentProds, setCurrentProds] = useState([])

  useEffect( () => {
    setSlugs(filters.join("_"))
    slugs != "" ? setSearchParams({search: slugs}) : setSearchParams();
  }, [slugs, setSearchParams, filters, setSlugs])

  useEffect(() => {
    setIndexOfFirstProd(indexOfLastProd - prodPerPage)
    setCurrentProds(newProducts.slice(indexOfFirstProd, indexOfLastProd))
  },[newProducts, indexOfFirstProd, indexOfLastProd, prodPerPage])
  
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
  if (newProducts.length > indexOfLastProd) {
    setCurrentPage( (prevState) => {
        return(
          prevState + 1
        )
    })
  } 
 }

 useEffect(() => {
   setIndexOfLastProd(currentPage * prodPerPage)
   setTotalPages(Math.ceil(newProducts.length / 12))
 }, [currentPage, prodPerPage, totalPages, newProducts.length])

  return (
    <ProdListContainer>
        <SideBar/>
        <ListDiv>
            <ProdListTitle>Products List</ProdListTitle>
            <ProductsDiv>
              {currentProds.length === 0 ? 
                <ProdListTitle>There are no products in those categories</ProdListTitle> :
                currentProds.map(product => {
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