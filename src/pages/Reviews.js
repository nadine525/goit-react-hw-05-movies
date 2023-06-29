import { useEffect, useState } from 'react';
import { getMovieReviews } from '../servises/requestApi';
import { useParams } from 'react-router-dom';
import { Comment } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data))
      .then(error => console.log(error));
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            Author: {author}
            <Comment>{content}</Comment>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
