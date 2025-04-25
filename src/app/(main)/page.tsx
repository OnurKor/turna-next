import ContactCTA from "@/components/ContactCTA";
import FAQSection from "@/components/faq/FAQSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Solutions />
      <Features />
      <FAQSection />
      <ContactCTA />
    </div>
  );
}
