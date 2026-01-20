import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Resume />
      <Skills />
      <Gallery />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} Prince Nziza. All rights reserved.</p>
      </footer>
    </main>
  );
}
