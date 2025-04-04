import Home from '../views/Home.jsx'
import About from '../views/About.jsx'
import Search from '../views/Search.jsx'
export const routes = [
    {
        path: '/',
        Component: Home,
    },
    {
        path: '/about',
        Component: About,
    },
    {
        path: '/search/:search',
        Component: Search,
    }
    // Puedes agregar más rutas aquí
]