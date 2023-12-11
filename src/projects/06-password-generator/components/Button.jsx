const Button = ({ text, customClass, onClick }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
