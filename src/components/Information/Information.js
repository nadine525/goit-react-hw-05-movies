import {
  Division,
  Image,
  OriginalTitle,
  SubTitle,
  Paragraf,
  InfoDiv,
} from './Information.styled';

const Information = ({
  movie: {
    original_title,
    overview,
    poster_path,
    release_date,
    genres,
    vote_average,
  },
}) => {
  const completeUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const defaultPoster =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
  const chekedImg = poster_path ? completeUrl : defaultPoster;

  const UserScore = Math.round(vote_average * 10);

  return (
    <>
      <Division>
        <Image src={chekedImg} width={250} alt={original_title} />

        <InfoDiv>
          <OriginalTitle>
            {original_title} ({release_date.slice(0, 4)})
          </OriginalTitle>
          <Paragraf>User score: {UserScore}%</Paragraf>
          <SubTitle>Overview</SubTitle>
          <Paragraf>{overview}</Paragraf>
          <SubTitle>Genres</SubTitle>
          <Paragraf>{genres.map(item => item.name).join(' ')}</Paragraf>
        </InfoDiv>
      </Division>
    </>
  );
};

export default Information;
