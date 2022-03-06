import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import styled from 'styled-components'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  /* const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading); */

  return (
   <MainContainer>
      <Header/>
      <Content/>
      <Footer/>
   </MainContainer>

    
  );
}

export default App;
