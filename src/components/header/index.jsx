import { useState } from "react";
import "./styles.css";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Header() {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  return (
    <header>
      <h2 className="logo">
        c<span>o</span>mpatto
      </h2>
      <div className="hamburger-menu">
        <button onClick={() => setIsFlyoutOpen(!isFlyoutOpen)}>
          <HiMenuAlt3 size={30} color="#967E66" />
        </button>
        {isFlyoutOpen && (
          <div className="flyout">
            <ul>
              <li>
                <a href="">Who we are</a>
              </li>
              <li>
                <a href="">our categories</a>
              </li>
              <li>
                <a href="">our process</a>
              </li>
              <li>
                <a href="">Why choose compatto</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="toggle-visibility">
        <div className="nav-links">
          <nav>
            <ul>
              <li>
                <a href="">Who we are</a>
              </li>
              <li>
                <a href="">our categories</a>
              </li>
              <li>
                <a href="">our process</a>
              </li>
              <li>
                <a href="">Why choose compatto</a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="nav-btn">Contact us</button>
      </div>
    </header>
  );
}
