import { useEffect, useState } from "react"
import { Header } from "./components/Header.jsx"
import PageLoader from "./components/PageLoader.jsx"
import SideBar from "./components/SideBar.jsx"



function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState(false);
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
      <Header open={open} setOpen={setOpen} />
      {isLoading ? <PageLoader /> : null}
      <SideBar open={open} />
 
    </>
  )
}

export default App
