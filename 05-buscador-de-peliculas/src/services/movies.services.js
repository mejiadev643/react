const API_URL = 'http://www.omdbapi.com/';
const API_KEY = 'b2467ebb';

export const searchMovies = async ({ search }) => {
    if (search === '') return null

    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const data = json.Search;

        return data?.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }));
    } catch (e) {
        throw new Error('Error searching movies')
    }
}