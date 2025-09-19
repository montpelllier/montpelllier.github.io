function ArticlesPage({ onSelectArticle }) {
  const articles = typeof getAllArticles === 'function' ? getAllArticles() : [];

  return (
    <div className="articles-page">
      <h1>Articles</h1>
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card" onClick={() => onSelectArticle(article.slug)}>
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}