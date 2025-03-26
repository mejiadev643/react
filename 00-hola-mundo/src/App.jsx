import { useState, useEffect } from "react"
export function App() {
  const [count, setCount] = useState(0)
  ///crear un estado para guardar mas cosas
  const [user, setUser] = useState({})
  //crear metodo para hcer una petición a una api
  const fetchUser = async () => {
   const response = await fetch('https://api.github.com/users/midudev')
   console.log('se hizo la peticion')
   const data = await response.json()
   setUser(data)
   console.log(user)
   console.log('se guardo el usuario')
  }
  useEffect(() => {
    console.log('se monto el componente')
    fetchUser()
  }, [])

  return (
    <article>
      <header>
        <img src="https://unavatar.io/x/mejiadev" alt="avatar de midudev" />
        <div>
          <strong>Miguel Angel duran</strong>
          <span>midudev</span>
        </div>
      </header>
      <aside>
        <button onClick={() => setCount(count + 1)}>
          me gusta
        </button>
        <button onClick={fetchUser}>
          fetch user
        </button>
        <span>{count}</span>
      </aside>
    </article>
  )
}

