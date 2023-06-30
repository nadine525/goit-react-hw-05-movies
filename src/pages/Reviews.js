import { useEffect, useState } from 'react';
import { getMovieReviews } from '../servises/requestApi';
import { useParams } from 'react-router-dom';
import { Comment, Item, Sory, List, AuthorName } from './Reviews.styled';

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

  // console.log(reviews);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <AuthorName>
                Author: <b>{author}</b>
              </AuthorName>
              <Comment>{content}</Comment>
            </Item>
          ))}
        </List>
      ) : (
        <Sory>We don't have any reviews for this movie.</Sory>
      )}
    </>
  );
};

export default Reviews;
