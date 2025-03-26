import { useState, useEffect, useCallback } from 'react';

const URL_CATAAS = 'https://cataas.com';

export function useCatImage({ fact }) {
  const [catImage, setCatImage] = useState();

// Definir la función async usando useCallback para memorizarla
const fetchCatImage = useCallback(async () => {
  try {
    const TwoFirstWords = fact?.split(' ').slice(0, 2).join(' ') ?? 'cat'; // Tomar las dos primeras palabras
    const imageUrl = `${URL_CATAAS}/cat/says/${TwoFirstWords}?size=50&color=red`;

    setCatImage(imageUrl); // Simplemente asignamos la URL
  } catch (error) {
    console.error('Error fetching cat image:', error);
  }
}, [fact]);// Dependencia: se vuelve a crear si 'fact' cambia

  useEffect(() => {
    if (!fact) return;
    fetchCatImage(); // Llamar a la función

  },[fact, fetchCatImage]);// Dependencias: se vuelve a ejecutar si 'fact' o 'fetchCatImage' cambian

  return { catImage };
}
