import React, { useContext, useEffect } from 'react'
import { renderContext } from '../../../context/renderContext' 
import Card from '../../Common/Card/Card'
import {
    ListDiv,
    ProdList,
    ProdListTitle,
    ProductsDiv,
    PaginationDiv,
    Text,
    StyledIcon
} from './styledSearch'

function Search() {

    const { dataSearch } = useContext(renderContext)
 
    console.log(dataSearch)
  return (
      <ListDiv>
        <ProdListTitle>Search List</ProdListTitle>
        <ProductsDiv>
            {dataSearch.length === 0 ? 
                <ProdListTitle>Sorry, we couldn't find that product</ProdListTitle> :
                dataSearch.map(prod =>{
                    return(
                        <Card key={crypto.randomUUID()} noDetail="hide" {...prod} />
                    )
                })
            }
        </ProductsDiv>
      </ListDiv>
  )
}

export default Search