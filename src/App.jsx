import './css/App.css'
import Home from './assets/pages/Home.jsx'
import Favorites from './assets/pages/Favorites.jsx'
import { Routes, Route } from 'react-router-dom'
import NavBar from './assets/components/NavBar.jsx'

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </main>
    </div>

  );
}

export default App