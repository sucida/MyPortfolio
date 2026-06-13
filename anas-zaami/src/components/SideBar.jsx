import './SideBar.css'
function SideBar({ open }) {
  return (
    <nav
      aria-hidden={!open}
      inert={!open}
      className={`side fixed inset-x-0 bottom-0 top-12 z-40 flex flex-col overflow-y-auto overscroll-contain bg-[#1d1d1f] pt-12 transform-gpu transition-transform duration-300 ease-out will-change-transform md:top-10 lg:hidden ${
        open
          ? "translate-y-0"
          : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="py-3 px-5 tracking-tight leading-relaxed  ">
        <a href="#">Home</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">About</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">Process</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">Curriculum</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">Portfolio</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">Skills</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">Service</a>
      </div>

      <div className="py-3 px-5 tracking-tight leading-relaxed ">
        <a href="#">Experience</a>
      </div>
    </nav>
  );
}
export default SideBar
