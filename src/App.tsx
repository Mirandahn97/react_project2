import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { Button } from './components/Button/Button'
import { Navbar } from './components/Navbar/Navbar'
import { Hilsen } from './components/Hilsen/Hilsen'
import { Card } from './components/Card/Card'

function App() {

  let livretter = ["pizza", "kartoffelmos", "burger", "pandekager", "kylling"]


  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Main></Main>
      <div>
        {livretter.map((item) => (
          <Card>
            <p>{item}</p>
      </Card>
        ))}
      </div>
      <Hilsen textvalue='Hej Kasper'></Hilsen>
      <Hilsen textvalue='Hej Kari'></Hilsen>
      <Hilsen textvalue='Hej Jonas'></Hilsen>
      <Button></Button>
      <Footer></Footer>
    </>
  )
}

export default App
