import { useEffect, useRef } from "react";
import lottieModule from "lottie-web/build/player/lottie_light_canvas.js";
import profileAnimation from "../assets/animations/60ea25b4-1170-11ee-9bfa-7fcceb82d8c6.json";
import "./Home.css";

const lottie = lottieModule.default ?? lottieModule;

function ProfileAnimation({ paused }) {
  const containerRef = useRef(null);
  const updatePlaybackRef = useRef(null);
  const pausedRef = useRef(paused);

  useEffect(() => {
    if (!containerRef.current) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let isVisible = true;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "canvas",
      loop: true,
      autoplay: !reducedMotion,
      animationData: profileAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        progressiveLoad: false,
        clearCanvas: true,
        dpr: Math.min(window.devicePixelRatio, 2),
      },
    });
    const updatePlayback = () => {
      if (
        pausedRef.current ||
        reducedMotion ||
        document.hidden ||
        !isVisible
      ) {
        animation.pause();
      } else {
        animation.play();
      }
    };
    updatePlaybackRef.current = updatePlayback;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.01 },
    );

    observer.observe(containerRef.current);
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      updatePlaybackRef.current = null;
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    pausedRef.current = paused;
    updatePlaybackRef.current?.();
  }, [paused]);

  return (
    <div
      ref={containerRef}
      className="home-lottie aspect-square w-[280px] max-w-full sm:w-[330px] md:w-[360px] lg:w-[420px]"
      role="img"
      aria-label="Anas Zaami"
    />
  );
}

function Home({ menuOpen = false }) {
  return (
    <section
      className="home-hero mx-auto flex min-h-svh max-w-7xl flex-col items-center justify-start gap-6 overflow-x-clip px-5 pb-8 pt-28 sm:justify-center sm:gap-8 sm:px-8 sm:pt-20 md:pt-16 lg:flex-row lg:gap-8 lg:px-8 lg:py-12 xl:gap-12 xl:px-15"
    >
      <div className="home-content flex min-w-0 w-full items-center justify-center lg:flex-1">
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

      <div className="home-art animation flex min-w-0 w-full items-center justify-center lg:flex-1">
        <ProfileAnimation paused={menuOpen} />
      </div>
    </section>
  );
}

export default Home;
