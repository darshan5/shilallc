import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Employment from "@/components/Employment";
import Charity from "@/components/Charity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Employment />
        <Charity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
