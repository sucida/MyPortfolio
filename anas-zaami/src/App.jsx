import { useEffect, useState } from "react"
import { Header } from "./Header.jsx"
import PageLoader from "./components/PageLoader.jsx"
import { Home } from "./Home.jsx"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const minimumLoadingTime = 1500
    const startedAt = Date.now()

    const finishLoading = () => {
      const elapsed = Date.now() - startedAt
      const remaining = Math.max(minimumLoadingTime - elapsed, 0)

      window.setTimeout(() => {
        setIsLoading(false)
      }, remaining)
    }

    if (document.readyState === "complete") {
      finishLoading()
    } else {
      window.addEventListener("load", finishLoading, { once: true })
    }

    return () => {
      window.removeEventListener("load", finishLoading)
    }
  }, [])

  return (
    <>
      <Header />
      {isLoading ? <PageLoader /> : null}
    </>
  )
}

export default App
