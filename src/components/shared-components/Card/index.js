import "./Card.css";

const Card = ({ children, cardClass }) => (
  <div className={["card", cardClass].join(" ")}>{children}</div>
);

export default Card;
