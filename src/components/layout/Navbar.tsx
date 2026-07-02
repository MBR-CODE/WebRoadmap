import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <a
            href="#home"
            className="text-2xl font-black text-sky-400"
          >
            🌐 WebVerse
          </a>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">

            <a
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#journey"
              className="transition hover:text-white"
            >
              Journey
            </a>

          </div>

        </nav>
      </Container>
    </header>
  );
}