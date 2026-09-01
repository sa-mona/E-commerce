import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="navbar">

        <div className="logo">Mona's Choices</div>


        <div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/product">Products</Link>
  
        <div className="search">
  <input type="text" placeholder="Search Mona's Choices" />
  <span className="search-icon">⌕</span>
</div>
  <Link to="/wishlist">❤️ </Link>
  <Link to="/cart">🛒</Link>
  <Link to="/about">About</Link>
</div>
      </div>
    </nav>
  );
}

export default Nav;