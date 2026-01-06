import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Button } from './components/Button/Button'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
      <Header></Header>
      <Main></Main>
        <Button></Button>
      <Footer></Footer>
    </>
  )
}

export default App
