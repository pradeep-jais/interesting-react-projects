import { useEffect, useRef, useState } from 'react';
import './styles.css';
import axios from 'axios';
import ErrorPage from '../../components/Error';
import Pills from './Pills';

const USER_API = 'https://dummyjson.com/users/search?q=';

const MultiSelectSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const inputRef = useRef();
  const usersRef = useRef();

  useEffect(() => {
    if (searchTerm.length < 1) {
      setUsers([]);
      return;
    }
    const fetchUser = async () => {
      setHighlightedIndex(-1);
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

  function selectUser(user) {
    let newUser = [];
    if (selectedUsers.length < 1) {
      newUser = [user];
    } else {
      const flag = selectedUsers.find((item) => item.email === user.email);
      if (!flag) {
        newUser = [...selectedUsers, user];
      } else {
        newUser = [...selectedUsers];
      }
    }
    setSelectedUsers(newUser);
    setSearchTerm('');

    // Cursor focused on input after new user selected
    inputRef.current.focus();
  }

  const removeUser = (user) => {
    const newUser = selectedUsers.filter((item) => item.email !== user.email);

    setSelectedUsers(newUser);
  };

  const handleKeyDown = (e) => {
    // Navigate to suggested users suggestion tab on ArrorDown
    if (e.key === 'ArrowDown' && highlightedIndex < users.length - 1) {
      e.preventDefault();
      setHighlightedIndex(highlightedIndex + 1);
      scrollToHighlightedUser();
    } else if (e.key === 'ArrowUp' && highlightedIndex > 0) {
      e.preventDefault();
      setHighlightedIndex(highlightedIndex - 1);
      scrollToHighlightedUser();
    } else if (
      e.key === 'Enter' &&
      highlightedIndex >= 0 &&
      highlightedIndex < users.length
    ) {
      selectUser(users[highlightedIndex]);
    }

    if (e.key === 'Backspace' && selectedUsers.length > 0 && !searchTerm) {
      const newSelectedUsers = [...selectedUsers];
      newSelectedUsers.pop();
      setSelectedUsers(newSelectedUsers);
    }
  };

  const scrollToHighlightedUser = () => {
    if (usersRef.current && usersRef.current.children[highlightedIndex]) {
      usersRef.current.children[highlightedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  if (error) {
    return <ErrorPage errorMessage={error} />;
  }

  return (
    <section className="multi-select-search">
      <div className="section-center">
        <div className="search-input">
          {selectedUsers.map((user) => {
            const { firstName, lastName, email, image } = user;
            return (
              <Pills
                key={email}
                fullName={`${firstName} ${lastName}`}
                image={image}
                onClick={() => {
                  removeUser(user);
                }}
              />
            );
          })}

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            ref={inputRef}
            placeholder="search for a user..."
          />
        </div>
        {isLoading ? (
          <div className="loading" style={{ marginTop: '3rem' }}></div>
        ) : (
          <>
            {users.length > 0 && (
              <ul className="search-suggestion" ref={usersRef}>
                {users.map((user, index) => {
                  const { firstName, lastName, email, image } = user;
                  return (
                    <li
                      key={email}
                      className={`user-name ${
                        index === highlightedIndex ? 'highlight-user' : ''
                      }`}
                      onClick={() => {
                        selectUser(user);
                      }}
                    >
                      <img src={image} alt={firstName} />
                      <span>
                        {firstName} {lastName}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            {users.length < 1 && searchTerm && (
              <p className="user-alert">No user matched for your search</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default MultiSelectSearch;
