// Navbar.js
function Navbar({ activePage, changePage }) {
  const [open, setOpen] = React.useState(false);
  const pages = ["home", "projects", "articles", "about"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="navbar-logo"
          onClick={() => {
            changePage("home");
            setOpen(false); // 点击logo收起菜单
          }}
        >
          My Portfolio
        </div>
        {/* <div className="navbar-logo" onClick={() => changePage('home')}>My Portfolio</div> */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>
        <ul className={`navbar-menu ${open ? "open" : ""}`}>
          {pages.map((page) => (
            <li className="navbar-item" key={page}>
              <a
                href="#"
                className={`navbar-link ${activePage === page ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  changePage(page);
                  setOpen(false); // 点击菜单收起
                }}
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
//         <ul className="navbar-menu">
          
//           {['home', 'projects', 'articles', 'about'].map((page) => (
//             <li className="navbar-item" key={page}>
//               <a
//                 className={`navbar-link ${activePage === page ? 'active' : ''}`}
//                 onClick={() => changePage(page)}
//               >
//                 {page.charAt(0).toUpperCase() + page.slice(1)}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
