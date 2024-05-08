import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'


import './App.css'



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Header'
import Footer from './components/Footer'

// containers
import Home from './containers/Home'


// Instructors routes (components)
import Abdurrahman from './trainers/Abdurrahman'
import Anvar from './trainers/Anvar'
import Aydin from './trainers/Aydin'
import Babak from './trainers/BabakKarimli'
import Turxan from './trainers/Turxan'
import Elcin from './trainers/Elcin'
import Elmir from './trainers/Elmir'
import Tunay from './trainers/Tunay'
import Aysun from './trainers/Aysun'
import Konul from './trainers/Konul'


// Education Fields
import Helpdesk from './containers/it/Helpdesk'
import System from './containers/it/System'
import Bulud from './containers/it/Bulud'
import Shebeke from './containers/it/Shebeke'


// Syllabus Routes
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />

      {/* Instructors routes */}
      <Route path='/instructors/abdurrahman' element={<Abdurrahman />} />
      <Route path='/instructors/anvar' element={<Anvar />} />
      <Route path='/instructors/aydin' element={<Aydin />} />
      <Route path='/instructors/babek' element={<Babak />} />
      <Route path='/instructors/turxan' element={<Turxan />} />
      <Route path='/instructors/elcin' element={<Elcin />} />
      <Route path='/instructors/elmir' element={<Elmir />} />
      <Route path='/instructors/tunay' element={<Tunay />} />
      <Route path='/instructors/aysun' element={<Aysun />} />
      <Route path='/instructors/konul' element={<Konul />} />

      {/* Course details routes  */}

      <Route path="/courses/helpdesk" element={<Helpdesk />} />
      <Route path="/courses/sistem" element={<System />} />
      <Route path="/courses/bulud" element={<Bulud />} />
      <Route path="/courses/shebeke" element={<Shebeke />} />
    </Routes>

    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
