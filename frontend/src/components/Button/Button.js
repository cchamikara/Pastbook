import "./Button.scss";

const Button = ({ children, onClick, enabled }) => {
  return (
    <button
      className={`Button ${enabled ? "enabled" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
