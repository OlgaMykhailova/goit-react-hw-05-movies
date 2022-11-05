import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { MovieInformation, MovieDecription, LinkBack } from './MovieDetails.styled'

import { getMovieDetails } from '../services/Api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    loadMovieDetails(movieId);
  }, [movieId]);

  const loadMovieDetails = async movieId => {
    try {
      const movie = await getMovieDetails(movieId);
      console.log(movie);
      if (!movie) {
        Notify.failure('Sorry, there are no details for this movie.');
        return;
      }
      setMovieData(movie);
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieData;

  return (
    <div>
      <LinkBack to={location.state.from ?? '/'}>Go back</LinkBack>
      <MovieInformation>
        <img
          src={
            `https://image.tmdb.org/t/p/w500${poster_path}` ??
            'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg'
          }
          alt={title}
          width="320"
        ></img>
        <MovieDecription>
          <h2>
            {title} ({release_date?.slice(0, 4)})
          </h2>
          <p>User score: {Number(vote_average).toFixed(1) * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(genre => genre.name).join(', ')}</p>
        </MovieDecription>
      </MovieInformation>
      <Outlet />
    </div>
  );
};
