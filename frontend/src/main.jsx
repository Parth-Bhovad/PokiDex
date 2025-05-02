import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Dashboard from './components/Dashboard'
// import PokemonDetail from './components/PokemonDetail'
import HomePage from './features/pokemon/pages/HomePage'
import { PokemonProvider } from './features/pokemon/context/PokemonContext'
import Navbar from './components/Navbar'
import DetailPage from './features/pokemon/pages/DetailPage'
import FavoritesPage from './features/pokemon/pages/FavoritesPage'
import ComparePage from './features/pokemon/pages/ComparePage'

import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <>
        <Navbar />
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:id" element={<DetailPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </PokemonProvider>
      </>
    </BrowserRouter>
  // </StrictMode>,
)
