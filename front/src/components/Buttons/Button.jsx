import "./Button.css";

// eslint-disable-next-line react/prop-types
export default function Button({ name, className, bgColor = "var(--clr-btn-bg)" }) {
  return (
    <div className={`btn-container ${className}`}>
      <button className="btn" style={{ background: bgColor }}>
        {name}
      </button>
    </div>
  );
}
