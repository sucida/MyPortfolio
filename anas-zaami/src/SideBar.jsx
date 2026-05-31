import './SideBar.css'
function SideBar({ open }) {
  return (
    <nav className={`fixed top-10 left-0 h-full md:hidden bg-[#1D1D1F] w-full flex flex-col pt-15 transition duration-300 ease-out ${
      open ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Home</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">About</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Process</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Curriculum</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Portfolio</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Skills</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Service</a>
      </div>

      <div className="py-2 px-5 text-3xl font-bold text-[#E8E8ED]">
        <a href="#">Experience</a>
      </div>
    </nav>
  );
}
export default SideBar