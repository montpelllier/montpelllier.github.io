// HomePage.js
function HomePage({ changePage, openArticle }) {
  return (
    <div className="page home-page">
      <Hero />
      <FeaturedProjects changePage={changePage} />
      <LatestArticles openArticle={openArticle} />
    </div>
  );
}

// Hero section
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Yifeng Zhao</span></h1>
        <p className="hero-subtitle">Bridging Creativity and Technology</p>
        <p className="hero-description">
          Passionate about experimenting with modern web technologies and solving complex problems through innovative solutions.
        </p>
      </div>
    </section>
  );
}

// Featured projects
function FeaturedProjects({ changePage }) {
  const projects = [
    { id: 1, title: 'Featured Project One', description: 'A responsive website built with React and CSS', image: 'https://via.placeholder.com/400', tags: ['React','CSS','JS'] },
    { id: 2, title: 'Featured Project Two', description: 'An e-commerce platform with shopping cart functionality', image: 'https://via.placeholder.com/400', tags: ['Node.js','Express','MongoDB'] },
  ];

  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <a className="section-link" onClick={() => changePage('projects')}>View All Projects</a>
        </div>
        <div className="featured-projects-grid">
          {projects.map(proj => (
            <Card key={proj.id} {...proj} onClick={() => changePage('projects')} linkText="View Project" />
          ))}
        </div>
      </div>
    </section>
  );
}

// Latest articles
function LatestArticles({ openArticle }) {
  const latestArticles = typeof getLatestArticles === 'function' ? getLatestArticles(3) : [];

  return (
    <section className="latest-articles">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
        </div>
        <div className="articles-grid">
          {latestArticles.map(article => (
            <Card
              key={article.id}
              image={article.image}
              title={article.title}
              description={article.excerpt}
              tags={article.tags}
              onClick={() => openArticle(article.slug)}
              linkText="Read More"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
