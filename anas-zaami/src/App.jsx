import { lazy, Suspense, useEffect, useState } from "react"
import { Header } from "./components/Header.jsx"
import PageLoader from "./components/PageLoader.jsx"
import SideBar from "./components/SideBar.jsx"

const Home = lazy(() => import("./components/Home.jsx"))


function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <SideBar open={open} />
      <Suspense fallback={<PageLoader />}>
        <Home menuOpen={open} />
      </Suspense>
 
    </>
  )
}

export default App
