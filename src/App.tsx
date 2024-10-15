import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CargarReceta from './components/CargarReceta';
import SeguimientoPedido from './components/SeguimientoPedido';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">Farmacia Online</h1>
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cargar-receta" element={<CargarReceta />} />
            <Route path="/seguimiento-pedido" element={<SeguimientoPedido />} />
          </Routes>
        </main>
        <footer className="bg-gray-200 text-center p-4">
          <p>&copy; 2024 Farmacia Online. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;