import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'
import Favourites from './components/Favourites'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        
          <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:faviourites" element={<Favourites />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
          </Routes>
        
      </BrowserRouter>
    </Provider>
  )
}

export default App
