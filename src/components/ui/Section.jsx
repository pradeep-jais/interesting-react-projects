const Section = ({ title, children, styles }) => {
  return (
    <section className={`section ${styles || ""}`}>
      <div className="title">
        <h2>{title || "Add some section title"}</h2>
        <div className="underline" />
      </div>
      <div className="section-center">{children}</div>
    </section>
  );
};
export default Section;
