import "./Service.css";
// eslint-disable-next-line react/prop-types
const Service = () => {
  const service = [
    {
      id: 1,
      image: "image/free.svg",
      heading: "Free Shipping",
      des: "Free shipping on all orders",
    },
    {
      id: 2,
      image: "image/sett.svg",
      heading: "Money Guaranteed",
      des: "30 day maoney back",
    },
    {
      id: 3,
      image: "image/supt.svg",
      heading: "Online Support 24/7",
      des: "Technical support 24/7",
    },
    {
      id: 4,
      image: "image/pay.svg",
      heading: "Secure Payment",
      des: "All cards accepted",
    },
  ];
  return (
    <div className="service-wrapper paddings ">
      {service.map((el) => {
        return (
          <div key={el.id} className="service-container ">
            <img src={el.image} alt="" />
            <h3>{el.heading}</h3>
            <p>{el.des}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
