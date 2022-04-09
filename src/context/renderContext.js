import React, {createContext, useState, useEffect} from 'react'
import { useFetch } from '../utils/hooks/useFetch'

export const renderContext = createContext()

export const RenderProvider = (props) => {
    // categories
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
    const [detail, setDetail] = useState({})

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
            id: product.id,
            product: product
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
    
    //Search

    const [search, setSearch] = useState("")
    const [dataSearch, setDataSearch] = useState([{}])
    const [queryUrl, setQueryUrl] = useState("")

    // cart

    
    const [cartProducts, setCartProducts] = useState([])
    const [productsCount, setProductsCount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const cartLS = JSON.parse(localStorage.getItem('shoppingCart'));
        cartLS ? setCartProducts(cartLS) : setCartProducts([])
    }, [])

    useEffect(() => {
        localStorage.setItem("shoppingCart", JSON.stringify(cartProducts))
    }, [cartProducts])

    useEffect( () => {
        if (cartProducts.length > 0){
            let cuant = []
            let totalPerProduct= []
            cartProducts.forEach(prod => {
                cuant.push(prod.cuantity)
                totalPerProduct.push(prod.product.data.price * prod.cuantity)
            })
            let totalItem = cuant.reduce ((a, b) => a + b)
            let totalPrice = totalPerProduct.reduce ((a, b) => a + b)
            setProductsCount(totalItem)
            setTotal(totalPrice)

        } else if (cartProducts.length === 0) {
            setProductsCount(0)
            setTotal(0)
        }
    }, [cartProducts, setProductsCount, total, productsCount ])

    const handleBuy = (prod) => {
        if(cartProducts.some(prods => prods.product.id === prod.id)){
            alert("this product is already in the shopping cart")
        }else{
            setCartProducts([...cartProducts, {product: prod, cuantity: 1}])
        }
    }

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
            setSlugs,
            setDetail,
            dataProd,
            search,
            setSearch,
            dataSearch, 
            setDataSearch,
            queryUrl,
            setQueryUrl,
            cartProducts,
            setCartProducts,
            productsCount,
            setProductsCount,
            handleBuy,
            total,
            setTotal
        }}>
            {props.children}
        </renderContext.Provider>
    )
}