import "./ProductShop.css";
/* eslint-disable react/prop-types */
const ProductShop = ({ el }) => {
  return (
    <div className="single-product flexColStart" key={el.id}>
      <div className="p-image-container">
        <img src={el.image} alt="" />
      </div>
      <h3>{el.prodName}</h3>
      <p>{el.price}</p>
    </div>
  );
};

export default ProductShop;
