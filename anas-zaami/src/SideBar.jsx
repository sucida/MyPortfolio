function SideBar({ open }) {
  return (
    <nav className={`fixed top-10 left-0 h-full md:hidden bg-white w-full flex flex-col pt-15 transition duration-300 ease-out ${
      open ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Home</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">About</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Process</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Curriculum</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Portfolio</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Skills</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Service</a>
      </div>

      <div className="py-2 px-5 text-4xl font-bold text-[#333336]">
        <a href="#">Experience</a>
      </div>
    </nav>
  );
}
export default SideBar