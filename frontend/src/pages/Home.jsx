import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CategoryShowcase from '../components/CategoryShowcase';
import BrandValues from '../components/BrandValues';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import InstagramGrid from '../components/InstagramGrid';
import Footer from '../components/Footer';
import FloatingChat from '../components/FloatingChat';

export default function Home() {
  return (
    <div className="bg-surface text-on-background antialiased overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        <Hero />
        <CategoryShowcase />
        
        <BrandValues />
        <Testimonials />
        <Newsletter />
        <InstagramGrid />
      </main>
      <Footer />
      <FloatingChat />
    </div>
  );
}