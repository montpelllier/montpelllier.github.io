function ArticlePage({ slug }) {
  const [content, setContent] = React.useState('');
  const article = typeof getArticleBySlug === 'function' ? getArticleBySlug(slug) : null;

  React.useEffect(() => {
    if (!article) return;
    fetch(`/markdown/${slug}.md`)
      .then(res => res.text())
      .then(md => setContent(md));
  }, [slug, article]);

  if (!article) return <p>Article not found</p>;

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <div className="article-tags">
        {article.tags.map((tag, i) => <span key={i}>{tag}</span>)}
      </div>
      <div dangerouslySetInnerHTML={{ __html: window.marked.parse(content) }} />
    </div>
  );
}
