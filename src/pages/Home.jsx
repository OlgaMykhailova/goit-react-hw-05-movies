import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getTrending } from 'services/Api';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  const loadTrendingMovies = async () => {
    try {
      const responseData = await getTrending();
      const trendingMovies = responseData.results.map(({ id, title }) => {
        const movie = { id, title };
        return movie;
      });
      if (trendingMovies.length === 0) {
        Notify.failure('Sorry, there are no trending movies today.');
        return;
      }
      setTrendingFilms(trendingMovies);
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <h1>Trending Today</h1>
      <TrendingList trendingFilms={trendingFilms} />
      <NavLink to="/movies/movieId">MovieDetails</NavLink>
    </>
  );
};
