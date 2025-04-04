import { Link } from "../utils/Link"
import { Input } from "../utils/Input"
import { useState } from "react"
const i18n ={
    es: {
        title: 'Acerca de',
        button: 'Ir a la página de inicio',
        description: 'Esta es la página acerca de.',
    },
    en: {
        title: 'About',
        button: 'Go to Home page',
        description: 'This is the about page.',
    }
}
export default function About({routeParams}) {
    const { lang }  = routeParams? routeParams : { lang: 'es' }
    const i18nLang = i18n[lang] || i18n.es
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
        setInputValue(value); // Actualiza el estado con el valor recibido del hijo
    };

    return (
        <div>
            <h1>{i18nLang.title }</h1>
            <p>{ i18nLang.description }</p>
            <img src="https://dummyjson.com/image/150" alt="Placeholder" />
            <p>Here is some information about us.</p>
            <Link to="/">{ i18nLang.button }</Link>
            <br />
            <Link to="/search/some">Go to Search</Link>
            <Input onChange={handleInputChange}></Input>
            <p>Input value: {inputValue}</p>
        </div>
    )
}