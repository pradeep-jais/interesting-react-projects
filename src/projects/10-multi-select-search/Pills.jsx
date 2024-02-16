const Pills = ({ fullName, image, onClick }) => {
  return (
    <span className="user-pill">
      <img src={image} alt={fullName} />
      <span>{fullName}</span>
      <span onClick={onClick} style={{ cursor: 'pointer' }}>
        &#10060;
      </span>
    </span>
  );
};
export default Pills;
