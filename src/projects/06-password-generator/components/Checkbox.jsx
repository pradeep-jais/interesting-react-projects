const Checkbox = ({ state, onChange, title }) => {
  return (
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={state} onChange={onChange} />
        {title}
      </label>
    </div>
  );
};
export default Checkbox;
