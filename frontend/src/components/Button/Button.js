import "./Button.scss";

const Button = ({ children, onClick, enabled, ...rest }) => {
  return (
    <button
      className={`Button ${enabled ? "enabled" : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
