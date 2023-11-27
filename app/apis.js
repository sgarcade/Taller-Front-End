
// fetchData.js
import axios from 'axios';
import apiUrl from './apiConfig'; // Ruta al archivo de configuración

const fetchData = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/tu-endpoint`);
    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error; // Puedes manejar el error de otra manera si es necesario
  }
};

export default fetchData;
