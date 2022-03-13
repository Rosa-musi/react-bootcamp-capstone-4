import React, {createContext, useState, useEffect} from 'react'
import Products from '../mocks/en-us/products.json'

const productsData = []
Products.results.forEach(product => {
    productsData.push({
       name: product.data.name,
       image: product.data.mainimage.url,
       category: product.data.category.slug,
       price: product.data.price,
    })
})

export const renderContext = createContext()

export const RenderProvider = (props) => {
    const [renderProductList, setRenderProductList] = useState(false)
    const [filters, setFilters] = useState([])
    const [products, setProducts] = useState(productsData)
    const [newProducts, setNewProducts] = useState(productsData)

    useEffect(() => {
        if (filters.length === 0){
            setNewProducts(productsData)
        } else {
            let nuevo = []
          
            products.forEach(product => {
                filters.includes(product.category) &&
              nuevo.push(product)})
            setNewProducts(nuevo)
        }
        
    }, [filters, products]);
    

    return (
        <renderContext.Provider value={{
            renderProductList, 
            setRenderProductList,
            filters, 
            setFilters,
            products, 
            setProducts,
            newProducts,
            setNewProducts,
        }}>
            {props.children}
        </renderContext.Provider>
    )
}