import "./AppButton.css";

const AppButton = ({ variant, onClick, text, type, buttonClass, ...props }) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type || "button"}
    className={[variant, "button-wrapper", buttonClass].join(" ")}
    onClick={onClick}
    {...props}
  >
    {text}
  </button>
);

export default AppButton;
