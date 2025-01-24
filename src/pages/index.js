import HeroSection from '../components/HeroSection';
import TrendingSection from '../components/TrendingSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '@/components/Banner';
import EffectCardsScroller from '../components/EffectCardsScroller';


export default function Home() {
  return (
    <div>
    <Navbar />
      <HeroSection />
      <EffectCardsScroller/>
      <TrendingSection />
      <Footer />
    </div>
  );
}
