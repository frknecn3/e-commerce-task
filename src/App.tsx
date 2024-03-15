import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import DetailsPage from './pages/DetailsPage'
import MainPage from './pages/MainPage'
import CartPage from './pages/CartPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (<>
    <ToastContainer />
    <Header />
    <div className='min-vh-100'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    <Footer />
    </>
  )
}

export default App