import Loading from '../asset/Loading';

export default function Button({
  isFetching,
  liked,
  handleLikeUnlike,
  btnStyle = '',
}) {
  return (
    <button
      disabled={isFetching}
      className={`likeBtn ${btnStyle} ${liked ? 'liked' : ''}`}
      onClick={handleLikeUnlike}
    >
      {isFetching ? (
        <Loading size="1.5rem" color="red" />
      ) : (
        <i className="fa-regular fa-heart"></i>
      )}

      {liked ? 'liked' : 'like'}
    </button>
  );
}
