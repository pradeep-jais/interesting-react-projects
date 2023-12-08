const products = ({ products, page, itemsPerPage }) => {
  return (
    <div className="products">
      {products.length > 0 &&
        products
          .slice(itemsPerPage * page - itemsPerPage, itemsPerPage * page)
          .map((product) => {
            return (
              <article className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </article>
            );
          })}
    </div>
  );
};
export default products;
