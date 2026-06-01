import './SideBar.css'
function SideBar({ open }) {
  return (
    <nav className={`fixed top-10 left-0 h-full md:hidden bg-[#1d1d1f] w-full flex flex-col pt-15 transition duration-300 ease-out ${
      open ? "translate-y-0" : "-translate-y-full"
    }`}>
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