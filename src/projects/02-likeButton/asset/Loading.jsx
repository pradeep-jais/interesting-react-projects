// loading animation CSS from global styles in index.css

const Loading = ({ size, color }) => {
  return (
    <div
      className="loading"
      style={{ width: size, height: size, borderTopColor: color }}
    ></div>
  );
};
export default Loading;
