import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './components/Header/Header'

function App() {
  /* const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading); */

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
