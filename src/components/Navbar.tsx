import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 获取当前 URL
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Articles', path: '/articles' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 左 Logo */}
        <div className="navbar-logo">
          <Link to="/">ZYF</Link>
        </div>

        {/* 中间菜单 */}
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          {pages.map((page) => (
            <li key={page.path} className="navbar-item">
              <Link
                to={page.path}
                className={location.pathname === page.path ? 'active navbar-link' : 'navbar-link'}
                onClick={() => setMenuOpen(false)} // 点击后关闭菜单
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 右侧汉堡按钮 */}
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
