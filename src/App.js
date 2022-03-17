import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import styled from 'styled-components'
import Header from './components/Header/Header'
import Home from './components/Content/HomePage/HomePage'
import ProductList from './components/Content/ProductList/ProductList'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import GlobalStyle from './globalStyles'
import { RenderProvider } from './context/renderContext';
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
        <RenderProvider>
          <MainContainer>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/products" element={<ProductList/>}/>
          </Routes>
          <Footer/>
          </MainContainer>
        </RenderProvider>
    </Router>


    
  );
}

export default App;
