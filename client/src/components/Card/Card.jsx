/* eslint-disable react/prop-types */
import Button from "../Buttons/Button";
import "./Card.css";
const Card = ({ card }) => {
  return (
    <div className="card-wrapper paddings">
      <div className="card-container " style={{ background: `${card.bg_color}` }}>
        <img src={card.image} alt="" />
        <div className="card-banner">
          <div className="card-banner-left">
            <p>20% OFF</p>
            <h1>{card.slogan}</h1>
            <p>15 Nov to 7 Dec</p>
          </div>
          <div className="card-banner-right">
            <p>Beats Solo Air</p>
            <h3>Summer Sale</h3>
            <p>Company that&apos;s grown from 270 to 480 employees in the last 12 months.</p>
            <Button name="shop" bgColor="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
