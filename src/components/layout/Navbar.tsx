import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <h1 className="text-2xl font-black text-sky-400">
            🌐 WebVerse
          </h1>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">

            <a href="#home" className="hover:text-white">
              Home
            </a>

            <a href="#journey" className="hover:text-white">
              Journey
            </a>

            <a href="#journey" className="hover:text-white">
              Technologies
            </a>

          </div>

        </nav>
      </Container>
    </header>
  );
}