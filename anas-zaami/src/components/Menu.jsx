import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="flex h-9 w-9 items-center justify-center"
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={() => setIsOpen((current) => !current)}
    >
      <span className="flex h-4 w-5 flex-col justify-between">
        <span
          className={`h-px w-full rounded-full bg-amber-50 transition-transform duration-300 ${
            isOpen ? "translate-y-[7.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-full rounded-full bg-amber-50 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-px w-full rounded-full bg-amber-50 transition-transform duration-300 ${
            isOpen ? "-translate-y-[7.5px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
}
