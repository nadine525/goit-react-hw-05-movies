const InfoAboutMovie = ({
  original_title,
  overview,
  genres,
  poster_path,
  release_date,
  vote_average,
}) => {
  return (
    <>
      <div>
        <img
          src="${'https://image.tmdb.org/t/p/w300' + poster_path || 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg'}"
          width={300}
          alt={original_title}
        />
      </div>

      <h2>{original_title}</h2>
      <p>User score: (Math.round({vote_average} * 10))%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
    </>
  );
};

export default InfoAboutMovie;
