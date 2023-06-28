const Information = movie => {
  const {
    movie: original_title,
    overview,
    genres,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  console.log(movie);

  const completeUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const defaultPoster =
    'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
  const chekedImg = poster_path ? completeUrl : defaultPoster;

  const UserScore = Math.round({ vote_average } * 10);
  return (
    <>
      <div>
        <img src={chekedImg} width={300} alt={original_title} />
      </div>

      <h2>
        {original_title} ({release_date}.slice(0, 4))
      </h2>
      <p>User score: {UserScore}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(item => item.name).join(', ')}</p>
    </>
  );
};

export default Information;
