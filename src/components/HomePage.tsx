import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Package } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold mb-8">Bienvenido a Farmacia Online</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/cargar-receta" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
          <FileText size={48} className="text-blue-600 mb-4" />
          <span className="text-xl font-semibold">Pedir Receta</span>
        </Link>
        <Link to="/seguimiento-pedido" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
          <Package size={48} className="text-green-600 mb-4" />
          <span className="text-xl font-semibold">Seguimiento de Pedido</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;