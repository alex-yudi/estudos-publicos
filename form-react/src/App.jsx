import './App.css'
import SignUp from './pages/signUp/index'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nova-rota' element={<PaginaEscolhida />} />

      </Routes>

    </div>
  )
}

export default App
