import Navbar from './components/common/Navbar';
import Hero from './components/home/Hero';
import RoomSection from './components/home/RoomS/RoomsSection';
import BeachSerenity from './components/home/BeachSerenity';
import Gallery from './components/home/Gallery';
import Features from './components/home/Feature/Feature';
import Testimonials from './components/home/Testimon/Testimonials';
import Footer from './components/common/Footer';
import EventPlan from "./components/home/Event/EventPlan";
import Subscribe from "./components/home/Sub/Subscribe";



function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <RoomSection />
        <BeachSerenity />
        <Gallery />
        <Features />
        <EventPlan />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;