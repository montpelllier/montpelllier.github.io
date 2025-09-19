// Navbar.js
function Navbar({ activePage, changePage }) {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => changePage('home')}>My Portfolio</div>
        <ul className="navbar-menu">
          {['home', 'projects', 'articles', 'about'].map((page) => (
            <li className="navbar-item" key={page}>
              <a
                className={`navbar-link ${activePage === page ? 'active' : ''}`}
                onClick={() => changePage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
