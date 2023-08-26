/* eslint-disable react/prop-types */
import "./ProductCard.css";
import Button from "./../Buttons/Button";

export default function ProductCard({ data }) {
  return (
    <section className="h-wrapper paddings">
      <div className="h-container" style={{ background: `${data.bg_color}` }}>
        <img src={data.image} alt="" />

        <div className="h-banner-heading">
          <h4>
            {data.heading_tag[0]} <br />
            <span>{data.heading_tag[1]}</span>
          </h4>
          <h1>{data.Product_name}</h1>
        </div>
        <Button name={data.button_name} className="hai" />
      </div>
    </section>
  );
}
