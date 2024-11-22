import Logo from "../../images/logo.svg";
import { pageLinks, socialLinks } from "../../data";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {" "}
                {link.text}{" "}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>
              <a
                href={socialLink.href}
                target="_blank"
                className="nav-icon"
                rel="noreferrer"
              >
                <i className={socialLink.icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
