import React, {createContext, useState, useEffect} from 'react'
import ProductsJson from '../mocks/en-us/products.json'
import CategoriesJson from '../mocks/en-us/product-categories.json'


const prueba = []
ProductsJson.results.forEach(product => {
    prueba.push(product)
})

const productsData = []
ProductsJson.results.forEach(product => {
    productsData.push({
       name: product.data.name,
       image: product.data.mainimage.url,
       category: product.data.category.slug,
       price: product.data.price,
    })
})

const categoriesData = []
CategoriesJson.results.forEach(category => {
    categoriesData.push({
       title: category.data.name,
       image: category.data.main_image.url,
       slugs: category.slugs,
       selected: false,
    })
    
})

export const renderContext = createContext()

export const RenderProvider = (props) => {
    
    // hacer fetch a API de todos los productos
    const [products, setProducts] = useState(productsData)
    const [newProducts, setNewProducts] = useState(productsData)

    // categories
    // hacer fetch
    const [categories, setCategories] = useState(categoriesData)
    const [filters, setFilters] = useState([])

    const handleSelected = (category) => {

        if (filters.includes(category.slugs[0])){
          const updateFilter = filters.filter(element => element != category.slugs[0])
          setFilters(updateFilter)
        } else {
          setFilters ([...filters, category.slugs[0]])
        }
    
      const newCategories = categories
        newCategories.forEach(cat => {
            if (cat.title === category.title){
              cat.selected = !cat.selected
            }
        }) 
        setCategories(newCategories)  

    }
    
    const clearCatFilters = () => {
        setFilters([])
        const newCategories = categories
        newCategories.forEach(cat => {
            cat.selected = false
        }) 
        setCategories(newCategories)
    }
    

    // product detail
    const [detail, setDetail] = useState(prueba)

    useEffect(() => {
        if (filters.length === 0){
            setNewProducts(products)
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
            filters, 
            setFilters,
            products, 
            setProducts,
            newProducts,
            setNewProducts,
            categories,
            setCategories,
            detail,
            handleSelected,
            clearCatFilters
        }}>
            {props.children}
        </renderContext.Provider>
    )
}