import { useEffect, useLayoutEffect, useRef, useState } from "react";
import LottieModule from "lottie-react";
import profileAnimation from "../assets/animations/60ea25b4-1170-11ee-9bfa-7fcceb82d8c6.json";
import { gsap } from "gsap";

const Lottie = LottieModule.default ?? LottieModule;

function Home() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
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

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const timeline = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: "power4.out",
          force3D: true,
        },
      });

      timeline
        .fromTo(
          contentRef.current,
          { x: -120, autoAlpha: 0, scale: 0.98 },
          {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            clearProps: "transform,opacity,visibility",
          },
          0,
        )
        .fromTo(
          animationRef.current,
          { x: 120, autoAlpha: 0, scale: 0.96 },
          {
            x: 0,
            autoAlpha: 1,
            scale: 1,
            clearProps: "transform,opacity,visibility",
          },
          0.08,
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-hero mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-start gap-6 overflow-x-clip px-5 pb-8 pt-28 sm:justify-center sm:gap-8 sm:px-8 sm:pt-20 md:pt-16 lg:flex-row lg:gap-8 lg:px-8 lg:py-12 xl:gap-12 xl:px-15"
    >
      <div
        ref={contentRef}
        className="home-content flex min-w-0 w-full items-center justify-center lg:flex-1"
      >
        <div className="home-copy min-w-0 w-full max-w-md text-center sm:max-w-xl sm:text-left">
          <h1 className="text-3xl leading-tight text-stone-200 sm:text-4xl lg:text-4xl xl:text-5xl">
            Hello, I'm{" "}
            <span className="whitespace-nowrap font-semibold">Anas Zaami</span>
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-[13px] leading-6 text-stone-300 sm:mx-0 sm:max-w-2xl sm:text-[15px]">
            I'm a student UI/UX Designer and Developer. I strive to build
            immersive and beautiful web applications through carefully crafted
            code.
          </p>

          <div className="home-actions mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
            <button className="cursor-pointer rounded-2xl bg-[#0170E3] px-4 py-1 text-[14px] text-stone-200">
              Contact
            </button>
            <button className="cursor-pointer rounded-2xl border border-[#0170E3] px-4 py-1 text-[14px] text-[#0170E3]">
              Work
            </button>
          </div>
        </div>
      </div>

      <div
        ref={animationRef}
        className="home-art animation flex min-w-0 w-full items-center justify-center lg:flex-1"
      >
        <Lottie
          key="profile-animation"
          lottieRef={lottieRef}
          animationData={profileAnimation}
          className="home-lottie h-auto w-full max-w-[280px] sm:max-w-[330px] md:max-w-[360px] lg:max-w-[420px]"
          renderer="svg"
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
