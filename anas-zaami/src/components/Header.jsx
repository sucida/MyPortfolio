import "./Header.css";
import Menu from "./Menu.jsx";

export function Header({ open, setOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-12 md:h-10 items-center justify-between border-b border-amber-50/10 bg-stone-950 px-4">
      <div className="flex w-auto items-center justify-start lg:w-20">
        <a href="https://github.com/sucida" target="_blank">
          <svg
            className="hover:opacity-80 duration-300 md:h-5 h-6"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 499.368"
          >
            <path
              fill="#fff"
              fill-rule="nonzero"
              d="M256.003 0C114.555 0 0 114.555 0 256.003c0 113.286 73.28 208.961 175.038 242.865 12.796 2.247 17.586-5.433 17.586-12.153 0-6.077-.309-26.225-.309-47.686-64.313 11.844-80.941-15.674-86.058-30.055-2.896-7.37-15.359-30.1-26.269-36.177-8.948-4.808-21.752-16.652-.31-16.961 20.168-.309 34.574 18.564 39.382 26.244 23.038 38.732 59.839 27.828 74.555 21.101 2.227-16.627 8.947-27.828 16.318-34.239-56.968-6.386-116.467-28.471-116.467-126.399 0-27.827 9.907-50.866 26.225-68.787-2.562-6.41-11.51-32.655 2.562-67.853 0 0 21.436-6.72 70.409 26.244 20.483-5.767 42.227-8.638 63.998-8.638 21.751 0 43.52 2.896 63.997 8.638 48.973-33.279 70.39-26.244 70.39-26.244 14.09 35.192 5.117 61.443 2.562 67.853 16.318 17.921 26.244 40.625 26.244 68.787 0 98.237-59.84 119.988-116.801 126.399 9.282 8.014 17.277 23.373 17.277 47.371 0 34.238-.309 61.751-.309 70.389 0 6.721 4.808 14.735 17.586 12.179C438.739 464.964 512 368.955 512 256.003 512 114.555 397.445 0 256.003 0z"
            />
          </svg>
        </a>
      </div>

      <nav className="hidden min-w-0 flex-1 justify-center lg:flex">
        <ul className="flex gap-6 list-none">
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              Process
            </a>
          </li>
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              Curriculum
            </a>
          </li>
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="https://aywgo.com/"
            >
              Aywgo
            </a>
          </li>
          <li>
            <a
              className="text-white/80 text-[12px] font-extralight hover:opacity-70 duration-300"
              href="#"
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex w-auto items-center justify-end lg:w-20">
        <div className="me-2 lg:hidden">
          <Menu open={open} setOpen={setOpen} />
        </div>
        <button
          onClick={() => window.open("https://wa.me/212775094615")}
          className="flex items-center text-white/80 text-[12px] cursor-pointer bg-[#0171E3] px-4 py-0.5 rounded-2xl hover:opacity-90 hover:bg-white hover:text-[#0171E3] duration-400"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
