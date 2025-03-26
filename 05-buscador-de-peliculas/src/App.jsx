import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import './App.css';

function useSearchMovies() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstRender = useRef(true);
  console.log('rendered useSearchMovies');

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === '';
      return;
    }
    if (search === '') {
      setError('No se ha ingresado una película');
      return;
    }
    if (search.match(/^[0-9]+$/)) {
      setError('No se permiten valores numéricos');
      return;
    }
    if (search.length < 3) {
      setError('Ingrese al menos 3 caracteres');
      return;
    }
    setError(null);
  }, [search]);

  return { error, search, setSearch };
}

function App() {
  const [sort, setSort] = useState(false);
  const { error, search, setSearch } = useSearchMovies();
  const { movies, getMovies } = useMovies({ search, sort });

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("busqueda de peliculas", search);
    getMovies({ search });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  console.log("render app");
  const counter = useRef(0);
  counter.current++;
  console.log(counter.current);

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="query">Nombre de la película:</label>
            <input onChange={handleChange} type="text" name="query" placeholder="Avengers, Spider man" />
            <input type='checkbox' onChange={handleSort} checked={sort} />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  );
}

export default App;