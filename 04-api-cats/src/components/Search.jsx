import {  useState } from "react"
import { useCatImage } from "../hooks/useCatImage"
import { Image } from "./Image"
export function Search(){
    const [search, setSearch] = useState('')
    const {catImage} = useCatImage({fact: search})
    const handleSearch = () => {
        const newSearch = document.getElementById('search').value
        setSearch(newSearch)
        console.log(newSearch)
    }

    return (
        <>
        <div>
            <input type="text"id="search" placeholder="Search for a cat" />
            <button onClick={handleSearch}>Search</button>
        </div>
        <div>
            <Image catImage={catImage}/>
        </div>
        </>
    )
}