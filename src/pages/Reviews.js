import { useEffect, useState } from 'react';
import { getMovieReviews } from '../servises/requestApi';
import { useParams } from 'react-router-dom';
import { Comment, Item } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <Item key={id}>
            Author: <b>{author}</b>
            <Comment>{content}</Comment>
          </Item>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
