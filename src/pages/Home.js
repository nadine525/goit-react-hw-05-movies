import { getTrendingMovies } from 'servises/requestApi';

const Home = () => {
  return <div>Домашня сторінка</div>;
  getTrendingMovies().then(data => console.log(data));
};

export default Home;
