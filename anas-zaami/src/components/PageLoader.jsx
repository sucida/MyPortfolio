export default function PageLoader() {
  return (
    <div className="fixed z-50 inset-0 z-100 flex items-center justify-center bg-stone-950">
      <div className="flex h-10 w-10 items-center justify-center gap-1.5" aria-label="Loading">
        <span className="loader-dot animation-delay-0" />
        <span className="loader-dot animation-delay-150" />
        <span className="loader-dot animation-delay-300" />
      </div>
    </div>
  );
}
