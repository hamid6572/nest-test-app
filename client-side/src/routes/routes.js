import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Dashboard, NotFound, Home, Details } from '../pages'

import 'react-toastify/dist/ReactToastify.css'
import '../App.css'

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/Dashboard' element={<Dashboard />} />

      <Route path='/' element={<Home />} />
      <Route path='/posts' element={<Dashboard />} />

      <Route path='/details/:id' element={<Details />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Routers
