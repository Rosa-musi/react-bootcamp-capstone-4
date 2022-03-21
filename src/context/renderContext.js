import React, {createContext, useState, useEffect} from 'react'
import { useFetch } from '../utils/hooks/useFetch'
import ProductsJson from '../mocks/en-us/products.json'


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

export const renderContext = createContext()

export const RenderProvider = (props) => {
    //lastAPI
/*     const [ref, setRef] = useState("")
    const [dataRef, isLoadingRef, errorRef] = useFetch("https://wizeline-academy.cdn.prismic.io/api/v2")

    
     useEffect(()=> {
        errorRef ? console.log(error) :
        !isLoadingRef && setRef(dataRef.refs[0].ref) 
        console.log(ref)
    }, [dataRef, errorRef, ref, isLoadingRef])  */


    // hacer fetch a API de todos los productos
    const [products, setProducts] = useState(productsData)
    const [newProducts, setNewProducts] = useState(productsData)

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
        }}>
            {props.children}
        </renderContext.Provider>
    )
}