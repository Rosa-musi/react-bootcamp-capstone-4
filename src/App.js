import { useContext } from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Home from './components/Content/HomePage/HomePage'
import ProductList from './components/Content/ProductList/ProductList'
import ProductDetail from './components/Content/ProductDetail/ProductDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer'
import GlobalStyle from './globalStyles'
import { renderContext } from './context/renderContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {

  const {slugs} = useContext(renderContext)
  return (
    <Router>
      <GlobalStyle/>
        <MainContainer>
        <Header/>
         <Routes>
          <Route exatc path="/" element={<Home/>}/>   
          <Route exact path="/home" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/> 
        {/*     <Route path={`/products/:${slugs}`} element={<ProductList/>}/> */}
          <Route exact path="/productDetail" element={<ProductDetail/>}/>
          <Route exact path="*" element={<ErrorPage />} />
        </Routes> 
        <Footer/>
        </MainContainer>
    </Router>
  );
}

export default App;
