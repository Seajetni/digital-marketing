import { useRef } from 'react';
import { Header } from "@/components/header";
import { Nav } from "@/components/Nav";
import Package from "@/components/Package";
import Section from "@/components/Section";

export default function Home() {
  const packageRef = useRef(null);
  const sectionRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main> 
      <nav>
        <Nav scrollTo={scrollToComponent}  packageRef={packageRef}/>
      </nav>

      <header>
        <Header/>
      </header>

      <section >
        <Section/>
      </section>

      <div ref={packageRef}>
        <Package/>
      </div>
    </main>
  );
}
