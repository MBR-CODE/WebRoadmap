import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import Journey from "./components/journey/Journey";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Journey/>
      </main>
    </div>
  );
}