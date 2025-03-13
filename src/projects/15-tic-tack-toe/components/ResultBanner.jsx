const ResultBanner = ({ status, statusMsg }) => {
  return (
    <span
      className={`text-white capitalize py-2 px-5 rounded-md transition-all ${
        status === 'win' ? ' bg-green-500' : ''
      } ${status === 'draw' ? 'bg-red-500' : ''} animate-bounce`}
    >
      {statusMsg}
    </span>
  );
};
export default ResultBanner;
