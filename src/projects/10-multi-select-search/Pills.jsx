const Pills = ({ fullName, image, onClick }) => {
  return (
    <span className="user-pill" onClick={onClick}>
      <img src={image} alt={fullName} />
      <span>{fullName}</span>
      <span>&#10060;</span>
    </span>
  );
};
export default Pills;
