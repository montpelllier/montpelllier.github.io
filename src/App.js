// App.js
function App() {
  const [activePage, setActivePage] = React.useState('home'); // home, projects, articles, about
  const [selectedSlug, setSelectedSlug] = React.useState(null); // Markdown文章slug

  const changePage = (page) => {
    setActivePage(page);
    setSelectedSlug(null);
  };

  const openArticle = (slug) => {
    setSelectedSlug(slug);
    setActivePage('articles');
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage changePage={changePage} openArticle={openArticle} />;
      case 'projects':
        return <ProjectPage />;
      case 'articles':
        return selectedSlug
          ? <Article slug={selectedSlug} />
          : <ArticlesPage onSelectArticle={openArticle} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage changePage={changePage} openArticle={openArticle} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} changePage={changePage} />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}