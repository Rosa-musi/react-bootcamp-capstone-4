import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import styled from 'styled-components'
import Header from './components/Header/Header'
import Home from './components/Content/HomePage/HomePage'
import ProductList from './components/Content/ProductList/ProductList'
import ProductDetail from './components/Content/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer'
import GlobalStyle from './globalStyles'
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
  /* const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading); */

  return (
    <Router>
      <GlobalStyle/>
        <MainContainer>
        <Header/>
         <Routes>
          <Route path="/" element={<Home/>}/>   
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/productDetail" element={<ProductDetail/>}/>
        </Routes> 
        <Footer/>
        </MainContainer>
    </Router>
  );
}

export default App;
