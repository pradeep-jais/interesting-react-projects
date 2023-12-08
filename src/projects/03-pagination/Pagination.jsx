import { useEffect, useState } from 'react';
import Products from './Products';
import './styles.css';

// Dummy product api
const url = 'https://dummyjson.com/products?limit=100';

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 15;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handlePageUpdate = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <section className="section pagination-project">
      <div className="section-center products-center">
        <div className="title">
          <h3>Products</h3>
          <div className="underline"></div>
        </div>
        <Products products={products} page={page} itemsPerPage={itemsPerPage} />
        {products.length > 0 && (
          <div className="pagination">
            <button
              onClick={() => {
                handlePageUpdate(page - 1);
              }}
              className={page === 1 ? 'hide-btn' : ''}
            >
              ◀
            </button>
            {Array.from({ length: totalPages }, (_, i) => {
              return (
                <button
                  key={i}
                  className={page === i + 1 ? 'active-page' : ''}
                  onClick={() => {
                    handlePageUpdate(i + 1);
                  }}
                >
                  {i + 1}
                </button>
              );
            })}
            <button
              onClick={() => {
                handlePageUpdate(page + 1);
              }}
              className={page === totalPages ? 'hide-btn' : ''}
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Pagination;
