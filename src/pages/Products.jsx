import ProductCard from "../components/ProductCard";
import "./Products.css";
import PinkKurti from "../assets/Product-img/Pink-Kurti.jpg";
import BlackKurti from "../assets/Product-img/Black-Kurti.jpg";
import GreenKurti from "../assets/Product-img/Green-Kurti.jpg";
import YellowKurti from "../assets/Product-img/Yellow-Kurti.jpg";
import BlueKurti from "../assets/Product-img/Blue-Kurti.jpg";
import WhiteKurti from "../assets/Product-img/White-Kurti.jpg";

function Products() {
  const products = [
    {
      name:"Pink Kurti",
      image: PinkKurti,
      price : 899
    },
     {
      name:"Black Kurti",
      image: BlackKurti,
      price : 699
    }, {
      name:"Green Kurti",
      image: GreenKurti,
      price : 799
    }, {
      name:"Yellow Kurti",
      image: YellowKurti,
      price : 899
    }, {
      name:"Blue Kurti",
      image: BlueKurti,
      price : 899
    }, {
      name:"White Kurti",
      image: WhiteKurti,
      price : 899
    },
  ];

  return (
    <div
    className="products">
      {products.map((product) => (
        <ProductCard
        key={product.name}
         product={product} 
         />
      ))}
    </div>
  );
}

export default Products;