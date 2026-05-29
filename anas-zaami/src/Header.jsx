import "./Header.css";
import Menu from "./components/Menu.jsx";
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-10 items-center justify-between border-b border-amber-50/10 bg-stone-950 px-10" >
      
      
      <div className="w-20">
        
      </div>

      
      <nav className="hidden min-w-0 flex-1 justify-center md:flex">
        <ul className="flex gap-6 list-none">
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Home</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">About</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Process</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Curriculum</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Portfolio</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Skills</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Service</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Experience</a></li>
          <li><a className="text-amber-50 text-[13px] font-extralight hover:opacity-70 duration-300" href="#">Contact</a></li>
        </ul>
      </nav>

      
      <div className="flex w-20 justify-end md:hidden" >
        <Menu />
      </div>

    </header>
  );
}
