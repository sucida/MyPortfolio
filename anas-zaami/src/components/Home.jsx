import { useEffect, useRef, useState } from "react";
import LottieModule from "lottie-react";
import profileAnimation from "../assets/animations/60ea25b4-1170-11ee-9bfa-7fcceb82d8c6.json";

const Lottie = LottieModule.default ?? LottieModule;

function Home() {
  const lottieRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 639px)").matches,
  );

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    const updateMobileState = (event) => setIsMobile(event.matches);

    mobileQuery.addEventListener("change", updateMobileState);
    return () => mobileQuery.removeEventListener("change", updateMobileState);
  }, []);

  const optimizeMobileAnimation = () => {
    if (!isMobile || !lottieRef.current) return;

    lottieRef.current.setSubframe(false);
    lottieRef.current.setSpeed(0.8);
  };

  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-8 px-5 pb-10 pt-20 sm:px-8 lg:flex-row lg:gap-12 lg:px-15 lg:py-16">
      <div className="flex min-w-0 w-full items-center justify-center lg:flex-1">
        <div className="min-w-0 w-full max-w-xl">
          <h1 className="text-3xl leading-tight text-stone-200 sm:text-4xl lg:text-5xl">
            Hello, I'm <span className="font-semibold">Anas Zaami</span>
          </h1>

          <p className="mt-3 max-w-2xl break-words text-sm leading-6 text-stone-300 sm:text-[15px]">
            I'm a student UI/UX Designer and Developer. I strive to build
            immersive and beautiful web applications through carefully crafted
            code and user-centric design.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button className="cursor-pointer rounded-2xl bg-[#0170E3] px-4 py-1 text-[14px] text-stone-200">
              Contact
            </button>
            <button className="cursor-pointer rounded-2xl border border-[#0170E3] px-4 py-1 text-[14px] text-[#0170E3]">
              Work
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-w-0 w-full items-center justify-center lg:flex-1">
        <Lottie
          key={isMobile ? "mobile-canvas" : "desktop-svg"}
          lottieRef={lottieRef}
          animationData={profileAnimation}
          className="h-auto w-full max-w-[250px] sm:max-w-[330px] md:max-w-[360px] lg:max-w-[420px]"
          renderer={isMobile ? "canvas" : "svg"}
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
            progressiveLoad: isMobile,
            clearCanvas: true,
          }}
          onDOMLoaded={optimizeMobileAnimation}
          loop
          autoplay
          role="img"
          aria-label="Anas Zaami"
        />
      </div>
    </section>
  );
}

export default Home;
