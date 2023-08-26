import ProductShop from "../ProductShop/PRoductShop";
import "./BestSeller.css";

const BestSeller = () => {
  let prodDescription = [
    {
      id: 1,
      image: "image/p-2.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 2,
      image: "image/p-3.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 3,
      image: "image/p-4.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 4,
      image: "image/p-5.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 5,
      image: "image/p-7.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 6,
      image: "image/p8.png",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 7,
      image: "image/p9.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
    {
      id: 8,
      image: "image/product-img.jpg",
      prodName: "White EliteBook Tablet 810",
      price: "$995.00    ",
    },
  ];
  return (
    <div className="seller-wrapper paddings">
      <div className="header ">
        <h1>Best Seller Products</h1>
        <p>Treat yourself with the superior quality products</p>
      </div>
      <div className="product-card flexStart">
        {prodDescription.map((el) => (
          <ProductShop el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
