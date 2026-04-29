import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/header/header'
import Playground from './pages/playground'
import VerticalCarouselPage from './pages/verticalcarouselpage'
import HorizontalCarouselPage from './pages/horizontalcarouselpage'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Playground />}/>
        <Route path='/verticalcarousel' element={<VerticalCarouselPage />}/>
        <Route path='/horizontalcarousel' element={<HorizontalCarouselPage />}/>
      </Routes>
    </>
  )
}

export default App
