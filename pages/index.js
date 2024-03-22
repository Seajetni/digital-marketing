import { useRef } from "react";
import { Header } from "@/components/header";
import { Nav } from "@/components/Nav";
import Package from "@/components/Package";
import Section from "@/components/Section";
import Review from "@/components/review";
import Contact from "@/components/contact";


export default function Home() {
  const packageRef = useRef(null);
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const contactRef = useRef(null);
  const reviewRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <nav>
        <Nav
          scrollTo={scrollToComponent}
          packageRef={packageRef}
          sectionRef={sectionRef}
          headRef={headRef}
          contactRef={contactRef}
          reviewRef={reviewRef}
        />
      </nav>

      <header ref={headRef}>
        <Header  />
      </header>

      <section ref={sectionRef}>
        <Section />
      </section>

      <div ref={reviewRef}>
        <Review />
      </div>

      <div ref={packageRef}>
        <Package />
      </div>

      <div ref={contactRef}>
        <Contact/>
      </div>
    </main>
  );
}
