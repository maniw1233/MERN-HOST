import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import NewsTicker from '../components/NewsTicker';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="page">
      <Header />
      <NewsTicker />
      <main className="main">
        <HeroSlider />
        {/* Add other page content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;