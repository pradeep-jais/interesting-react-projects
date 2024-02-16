import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import ErrorPage from '../../components/Error';

const USER_API = 'https://dummyjson.com/users/search?q=';

const MultiSelectSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.length < 1) {
      setUsers([]);
      return;
    }
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${USER_API}${searchTerm}`);
        setUsers(data.users);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [searchTerm]);

  console.log(users);

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  return (
    <section className="multi-select-search">
      <div className="section-center">
        <div className="search-input">
          {/* Pills */}
          <div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search for a user..."
            />
          </div>
        </div>
        {isLoading ? (
          <div className="loading" style={{ marginTop: '3rem' }}></div>
        ) : (
          <div className="search-suggestion">
            {users.map((user) => {
              const { firstName, lastName, email, image } = user;
              return (
                <div key={email} className="user-name">
                  <img src={image} alt={firstName} />
                  <span>
                    {firstName} {lastName}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
export default MultiSelectSearch;
