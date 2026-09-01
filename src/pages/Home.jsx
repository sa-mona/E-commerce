import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Welcome to Mona's Choices</h1>

      <p>Discover the best products at the best prices.</p>

      <button
        className="shop-button"
        onClick={() => navigate("/product")}
      >
        Shop Now
      </button>
    </section>
  );
}

export default Home;