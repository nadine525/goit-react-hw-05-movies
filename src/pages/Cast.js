import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActorsCast } from '../servises/requestApi';
import { List, ActorName, Character } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieActorsCast(movieId)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movieId]);

  // console.log(cast);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length > 0 ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                  alt={name}
                  width="150"
                />
              ) : (
                <img
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oJta_1HqNcTUlR5HGGzNOvJRUy0RDRavjw&usqp=CAU'
                  }
                  alt="not found"
                  width="150"
                  height="150"
                />
              )}
              <ActorName>{name}</ActorName>
              <Character>Character: {character}</Character>
            </li>
          ))}
        </List>
      ) : (
        <div>No casts</div>
      )}
    </>
  );
};

export default Cast;
