import { lazy, Suspense, useState } from "react"
import { Header } from "./components/Header.jsx"
import PageLoader from "./components/PageLoader.jsx"
import SideBar from "./components/SideBar.jsx"

const Home = lazy(() => import("./components/Home.jsx"))


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
 
    </>
  )
}

export default App
