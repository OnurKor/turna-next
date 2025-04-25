import ContactCTA from "@/components/ContactCTA";
import FAQSection from "@/components/faq/FAQSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    {/* <Hero />
    <Solutions />
    <Features />
    <FAQSection />
    <ContactCTA />
    <Footer /> */}
  </div>
  );
}
