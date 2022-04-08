import { useContext } from 'react'
import styled from 'styled-components'
import Header from './components/Header/Header'
import Home from './components/Content/HomePage/HomePage'
import ProductList from './components/Content/ProductList/ProductList'
import ProductDetail from './components/Content/ProductDetail/ProductDetail';
import Search from './components/Content/Search/Search'
import Cart from './components/Content/Cart/Cart'
import Checkout from './components/Content/Checkout/Checkout'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer'
import { routes } from './routes/routes'
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
            {routes.map(({ path, element: Component }, index) => {
              return <Route key={index} path={path} element={<Component/>} />
            })}
          </Routes> 
          <Footer/>
        </MainContainer>
    </Router>
  );
}

export default App;
