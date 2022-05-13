
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'
import { SearchContextProvider } from './context/useFetch'
import { Container } from './globalStyled'


function App() {


  return (
    <div className="App">
      <Container>
        <SearchContextProvider>
          <Header />
          <Home />
          <Footer />
        </SearchContextProvider>
      </Container>
    </div>
  )
}

export default App
