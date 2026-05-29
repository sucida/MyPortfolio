import "./Header.css";

export function Header() {
  return (
    <header className="flex items-center justify-between h-11 bg-mist-950/50 px-10 fixed top-0 left-0 right-0 opacity-80 " >
      
      
      <div className="w-1/3">
        
      </div>

      
      <div className="w-1/3 justify-center hidden md:flex">
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
      </div>

      
      <div className="w-1/3 flex justify-end">
       
      </div>

    </header>
  );
}