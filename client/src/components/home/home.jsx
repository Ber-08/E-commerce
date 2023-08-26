import BestSeller from "../BestSellerProducts/BestSeller";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import ProductCard from "../ProductCard/ProductCard";
import Service from "../Service/Service";
import Sponsor from "../Sponsor/Sponsor";
import "./home.css";

export default function Home() {
  const obj = [
    {
      id: 0,
      image: "image/image1.png",
      bg_color: "var(--clr-gray)",
      heading_tag: ["Beats Solo", "Wireless"],
      Product_name: "HEADPHONE",
      button_name: "Shop by Category",
    },
    {
      id: 1,
      image: "image/h.png",
      bg_color: "var(--clr-dark-gray)",
      heading_tag: ["Enjoy", "with"],
      Product_name: "EARPHONE",
      button_name: "Browse",
    },
    {
      id: 2,
      image: "image/w.png",
      bg_color: "var(--clr-yellow)",
      heading_tag: ["New", "Week"],
      Product_name: "GADGET",
      button_name: "Browse",
    },
    {
      id: 3,
      image: "image/Laptop.png",
      bg_color: "var(--clr-red)",
      heading_tag: ["Trend", "Devices"],
      Product_name: "LAPTOP",
      button_name: "Browse",
    },
    {
      id: 4,
      image: "image/gam.png",
      bg_color: "var(--clr-gray)",
      heading_tag: ["Best", "Gaming"],
      Product_name: "CONSOLE",
      button_name: "Browse",
    },
    {
      id: 5,
      image: "image/man2.png",
      bg_color: "var(--clr-green)",
      heading_tag: ["Play", "Game"],
      Product_name: "OCULUS",
      button_name: "Browse",
    },
    {
      id: 6,
      image: "image/mus.png",
      bg_color: "var(--clr-blue)",
      heading_tag: ["New", "Amazon"],
      Product_name: "SPEAKER",
      button_name: "Browse",
    },
  ];
  const card = [
    {
      id: 1,
      image: "image/head.png",
      slogan: `FINE  SMILE`,
      bg_color: "var(--clr-red)",
    },
    {
      id: 2,
      image: "image/p12.png",
      slogan: "HAPPY  HOURS",
      bg_color: "var(--clr-green)",
    },
  ];

  return (
    <>
      <div className="product_container">
        {obj.map((el) => {
          return <ProductCard key={el.id} data={el} />;
        })}
      </div>
      <Service className="service_container" />
      <Card card={card[0]} />
      <BestSeller />
      <Card card={card[1]} />
      <Sponsor />
      <Footer />
    </>
  );
}
