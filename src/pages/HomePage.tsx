// HomePage.tsx
import React from 'react';

// HomePage 组件
const HomePage: React.FC = () => {
  return (
    <div className="page home-page">
      <Hero />
    </div>
  );
};

export default HomePage;

// ================= Hero ==================
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Yifeng Zhao</span>
        </h1>
        <p className="hero-subtitle">Bridging Creativity and Technology</p>
        <p className="hero-description">
          Passionate about experimenting with modern web technologies and solving complex problems through innovative solutions.
        </p>
      </div>
    </section>
  );
};
