import { useEffect } from "react"
import { useState } from "react"

export const FollowMouse = () => {
    const [enable, setEnable] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
      //console.log('Effect', enable)
      const handleMove = (event) => {
        const { clientX, clientY } = event
        //console.log('Mouse move', clientX, clientY)
        setPosition({ x: clientX, y: clientY })
        setOpacity(0.8)
      }
      if (enable) {
        window.addEventListener('pointermove', handleMove)
      }
      return () => {
        setOpacity(0)
        window.removeEventListener('pointermove', handleMove)
      }
    }, [enable])
  
    return (
      <>
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: opacity,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
        <button onClick={() => setEnable(!enable)}>
          {enable ? "Desactivar" : "Activar"} puntero
        </button>
      </>
    )
  }