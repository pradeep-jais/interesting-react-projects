import Button from './Button';
import '../styles.css';
import { useEffect, useState } from 'react';
import HeartIcon from '../asset/HeartIcon';

// API url
const url = 'https://www.greatfrontend.com/api/questions/like-button';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  // const handleLiked = () => {
  //   setLiked(!liked);
  //   // console.log(liked);
  // };

  const handleLikeUnlike = async () => {
    setIsFetching(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ action: liked ? 'unlike' : 'like' }),
      });
      const data = await response.json();
      if (response.status >= 200 && response.status <= 300) {
        setLiked(!liked);
      } else {
        setError(data.message);
        setIsFetching(false);
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <section className="section-center like-button-project">
      <Button
        isFetching={isFetching}
        liked={liked}
        handleLikeUnlike={handleLikeUnlike}
      />
      <Button
        btnStyle={'animatedBtn'}
        isFetching={isFetching}
        liked={liked}
        handleLikeUnlike={handleLikeUnlike}
      />
      {error && <p className="error">{error}</p>}
    </section>
  );
};
export default LikeButton;
{
  /* <Loading size="1.8rem" color="red" />; */
}
