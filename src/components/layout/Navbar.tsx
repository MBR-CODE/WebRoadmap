import { Globe } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          <a
            href="#home"
            className="flex items-center gap-3 text-2xl font-black text-white transition hover:text-red-400"
          >
            <Globe
              size={28}
              className="text-red-500"
            />

            <span>WebVerse</span>
          </a>

          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">

            <a
              href="#home"
              className="transition hover:text-red-400"
            >
              Home
            </a>

            <a
              href="#journey"
              className="transition hover:text-red-400"
            >
              Journey
            </a>

          </div>

        </nav>
      </Container>
    </header>
  );
}