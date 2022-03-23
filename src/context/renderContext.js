import React, {createContext, useState, useEffect} from 'react'
import { useFetch } from '../utils/hooks/useFetch'
import ProductsJson from '../mocks/en-us/products.json'


const prueba = []
ProductsJson.results.forEach(product => {
    prueba.push(product)
})



export const renderContext = createContext()

export const RenderProvider = (props) => {



    // categories
    // hacer fetch
    const [categories, setCategories] = useState([])

    const [dataCat, isLoadingCat, errorCat] = useFetch(`&q=%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30`)

    useEffect(() => {
        let categoriesData = []
        
        !isLoadingCat && dataCat.results.forEach(category => {
            categoriesData.push({
                title: category.data.name,
                image: category.data.main_image.url,
                slugs: category.slugs,
                selected: false,
            }) 
        })
        setCategories(categoriesData)
      
    }, [dataCat, errorCat, isLoadingCat]) 

    const [filters, setFilters] = useState([])
    const [slugs, setSlugs] = useState("")

    const handleSelected = (category) => {

        if (filters.includes(category.slugs[0])){
          const updateFilter = filters.filter(element => element != category.slugs[0])
          setFilters(updateFilter)
          setSlugs(filters.join("_"))
        } else {
          setFilters ([...filters, category.slugs[0]])
          setSlugs(filters.join("_"))
        }
    
      const newCategories = categories
        newCategories.forEach(cat => {
            if (cat.title === category.title){
              cat.selected = !cat.selected
            }
        }) 
        setCategories(newCategories)  

    }

    // product detail
    const [detail, setDetail] = useState({})

 
    // hacer fetch a API de todos los productos
    const [dataProd, isLoadingProd, errorProd] = useFetch('&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=30')
    const [products, setProducts] = useState([{}])
    const [newProducts, setNewProducts] = useState([{}])

    useEffect(() => {
        const productsData = []
        
        !isLoadingProd && dataProd.results.forEach(product => {
            productsData.push({
            name: product.data.name,
            image: product.data.mainimage.url,
            category: product.data.category.slug,
            price: product.data.price,
            id: product.id
            })
        })

        setProducts(productsData)
        setNewProducts(productsData)

      
    }, [dataProd.results, isLoadingProd]) 


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
            slugs,
            setDetail,
            dataProd
        }}>
            {props.children}
        </renderContext.Provider>
    )
}