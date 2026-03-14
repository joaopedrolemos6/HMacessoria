import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Results from "@/components/Results";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Method />
        <Results />
        <Clients />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
