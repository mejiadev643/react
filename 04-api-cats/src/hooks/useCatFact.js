import { getRandomFact } from '../services/Facts'
import { useState, useEffect } from 'react'

// Custom hook para obtener el fact
export function useCatFact() {
  const [fact, setFact] = useState(null)

  const refreshFact = async () => {
    try {
      const newFact = await getRandomFact()
      setFact(newFact)
    } catch (error) {
      console.error('Error fetching cat fact:', error)
    }
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}