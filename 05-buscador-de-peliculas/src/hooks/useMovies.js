
import { useState, useCallback, useMemo } from 'react';
import { searchMovies } from '../services/movies.services';

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([]);
    console.log('rendered useMovies');

    const getMovies = useCallback(
        async ({search}) => {
            try {
                const newMovies = await searchMovies({ search })
                setMovies(newMovies);
            } catch (error) {
                console.error('Error al buscar las peliculas', error);
            }
        },
        [])//nota, se pasa la busqueda directamente en el argumento de la funcion, ya que se esta utilizando el hook useMemo para optimizar el rendimiento

    const sortedMovies = useMemo(() => {
        if (!movies) return;
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])
    return { movies: sortedMovies, getMovies };
}
//use callback se utiliza para que no se reinicie la funcion cada vez que se cambie el estado, esto ayuda a optimizar el rendimiento
//useMemo se utiliza para que no se reinicie la funcion cada vez que se cambie el estado, esto ayuda a optimizar el rendimiento
//NOTAS, usecallback se usa para endulzar la funcion, ya que revibe una funcion pero por debajo usa useMemo, useMemo se usa para optimizar el rendimiento, ya que se ejecuta solo cuando cambia el estado, en este caso se usa para ordenar las peliculas
