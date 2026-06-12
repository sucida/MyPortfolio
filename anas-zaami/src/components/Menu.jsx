
export default function Menu({ open, setOpen }) {
  return (
    <button
      className="flex h-9 w-9 items-center justify-center"
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={() => setOpen((current) => !current)}
    >
      <span className="flex h-4 w-5 flex-col justify-between">
        <span
          className={`h-px w-full rounded-full bg-amber-50 transition-transform duration-300 ${
            open ? "translate-y-[7.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-full rounded-full bg-amber-50 transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-px w-full rounded-full bg-amber-50 transition-transform duration-300 ${
            open ? "translate-y-[-7.5px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}
