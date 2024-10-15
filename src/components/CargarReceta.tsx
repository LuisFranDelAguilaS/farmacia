import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

const CargarReceta: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [sabor, setSabor] = useState<string>('');

  const sabores = ['Fresa', 'Vainilla', 'Chocolate', 'Menta', 'Naranja'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('El archivo es demasiado grande. El tamaño máximo permitido es 10MB.');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(selectedFile.type)) {
        setError('Formato de archivo no válido. Por favor, sube una imagen JPEG o PNG.');
        return;
      }
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setError(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setError('Por favor, selecciona una imagen de la receta médica.');
      return;
    }
    if (!sabor) {
      setError('Por favor, selecciona un sabor.');
      return;
    }
    setLoading(true);
    setError(null);

    // Simulamos el proceso de carga y validación
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);

    // Aquí iría la lógica real para enviar la imagen y el sabor al backend
    // const formData = new FormData();
    // formData.append('receta', file);
    // formData.append('sabor', sabor);
    // try {
    //   const response = await fetch('/api/cargar-receta', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   if (response.ok) {
    //     setSuccess(true);
    //   } else {
    //     setError('Hubo un error al procesar la receta. Por favor, intenta de nuevo.');
    //   }
    // } catch (error) {
    //   setError('Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.');
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Cargar Receta Médica y Seleccionar Sabor</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="receta" className="block text-sm font-medium text-gray-700 mb-2">
            Selecciona la imagen de la receta
          </label>
          <input
            type="file"
            id="receta"
            accept="image/jpeg,image/png"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>
        {previewUrl && (
          <div className="mb-4">
            <img src={previewUrl} alt="Vista previa de la receta" className="max-w-full h-auto rounded-lg" />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="sabor" className="block text-sm font-medium text-gray-700 mb-2">
            Selecciona el sabor
          </label>
          <select
            id="sabor"
            value={sabor}
            onChange={(e) => setSabor(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">Selecciona un sabor</option>
            {sabores.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">
            <AlertCircle className="mr-2" size={20} />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="mr-2" size={20} />
            <span>La receta ha sido cargada y el sabor seleccionado. Se ha enviado al médico exitosamente.</span>
          </div>
        )}
        <button
          type="submit"
          disabled={loading || !file || !sabor}
          className={`w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            (loading || !file || !sabor) && 'opacity-50 cursor-not-allowed'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Procesando...
            </>
          ) : (
            <>
              <Upload className="mr-2" size={20} />
              Cargar Receta y Seleccionar Sabor
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CargarReceta;