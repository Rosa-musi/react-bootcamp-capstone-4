import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { renderContext } from '../../../context/renderContext' 
import Card from '../../Common/Card/Card'
import {
    ListDiv,
    ProdListTitle,
    ProductsDiv,
    PaginationDiv,
    Text,
    StyledIcon
} from './styledSearch'

function Search() {

    const { dataSearch,  queryUrl, setQueryUrl} = useContext(renderContext)
    const [useParams, setUseParams] = useSearchParams()
    const [totalPages, setTotalPages] = useState(Math.ceil(dataSearch.length / 12))
    const [currentPage, setCurrentPage] = useState(1)
    const [prodPerPage, setProdPerPage] = useState(12)
  
    // Get Current products
    const [indexOfLastPost, setIndexOfLastPost] = useState(currentPage * prodPerPage)
    const [indexOfFirstPost, setIndexOfFirstPost] = useState(0)
    const [currentPosts, setCurrentPosts] = useState([])
   
    useEffect(() => {
        setIndexOfFirstPost(indexOfLastPost - prodPerPage)
        setCurrentPosts(dataSearch.slice(indexOfFirstPost, indexOfLastPost))
        setUseParams(queryUrl)
    },[dataSearch, indexOfFirstPost, indexOfLastPost, prodPerPage, queryUrl, setUseParams])
    
   const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage( (prevState) => prevState - 1)
    }
   }
  
   const handleNext = () => {
    if (dataSearch.length > indexOfLastPost) {
      setCurrentPage( (prevState) => {
          return(
            prevState + 1
          )
      })
    }  
   }
  
   useEffect(() => {
     setIndexOfLastPost(currentPage * prodPerPage)
     setTotalPages(Math.ceil(dataSearch.length / 12))
   }, [currentPage, prodPerPage, totalPages, dataSearch.length, indexOfFirstPost])
 
  return (
      <ListDiv>
        <ProdListTitle>Search List</ProdListTitle>
        <ProductsDiv>
            {currentPosts.length === 0 ? 
                <ProdListTitle>Sorry, we couldn't find that product</ProdListTitle> :
                currentPosts.map(prod =>{
                    return(
                        <Card key={crypto.randomUUID()} noDetail="hide" {...prod} />
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
  )
}

export default Search