import { useEffect, useState } from 'react'

const LOADER_KEY = 'portfolio-loader-seen'

export function useLoader(): {
  showLoader: boolean
  completeLoader: () => void
  skipLoader: () => void
} {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const seen = sessionStorage.getItem(LOADER_KEY)
    if (seen) {
      setShowLoader(false)
    }
  }, [])

  const finish = () => {
    sessionStorage.setItem(LOADER_KEY, 'true')
    setShowLoader(false)
  }

  return {
    showLoader,
    completeLoader: finish,
    skipLoader: finish,
  }
}
