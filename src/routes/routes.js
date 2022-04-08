import Cart from "../components/Content/Cart/Cart";
import Checkout from "../components/Content/Checkout/Checkout";
import Home from "../components/Content/HomePage/HomePage";
import ProductDetail from "../components/Content/ProductDetail/ProductDetail";
import ProductList from "../components/Content/ProductList/ProductList";
import Search from "../components/Content/Search/Search";
import ErrorPage from "../components/ErrorPage/ErrorPage";


export const routes = [
    {
        name: 'default',
        path: '/',
        element: Home,
    },
    {
        name: 'home',
        path: '/home',
        element: Home
    },
    {
        name: 'productList',
        path: '/products',
        element: ProductList
    },
    {
        name: 'products',
        path: "/productDetail/:id",
        element:  ProductDetail
    },
    {
        name: 'search',
        path: '/search',
        element: Search
    },
    {
        name: 'cart',
        path: '/cart',
        element: Cart
    },
    {
        name: 'checkout',
        path: '/checkout',
        element: Checkout
    },
    {
        name: 'error',
        path: '*',
        element: ErrorPage
    }
]