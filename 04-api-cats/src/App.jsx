
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Search } from './components/Search'
import { Image } from './components/Image'

function App() {

  const {fact, refreshFact} = useCatFact()
  const {catImage} = useCatImage({fact})

  const handleClick = () => {
    refreshFact()
  }


  return (
    <>
    <Search/>
    <button onClick={handleClick}> Click! to refresh</button>
    <p>{ fact && fact }</p>
    <Image catImage={catImage}/>
    
    </>
  )
}

export default App
