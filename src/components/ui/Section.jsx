const Section = ({ title, children }) => {
  return (
    <section className='section'>
      <div className='title'>
        <h2>{title || "Add some section title"}</h2>
        <div className='underline' />
      </div>
      <div className='section-center'>{children}</div>
    </section>
  );
};
export default Section;
