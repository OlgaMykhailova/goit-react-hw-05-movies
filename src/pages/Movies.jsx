import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieSearch } from '../services/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useEffect } from 'react';

export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  const updateQueryString = query => {
    setSearchedMovies([]);
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      return;
    }
    loadSearchedMovies(searchQuery);
  }, [searchQuery]);

  const loadSearchedMovies = async searchQuery => {
    try {
      const responseData = await getMovieSearch(searchQuery);

      const searchedResults = responseData.results.map(({ id, title }) => {
        const movie = { id, title };
        return movie;
      });
      if (searchedResults.length === 0) {
        Notify.failure(
          'Sorry, there are no information by your query. Try another search.'
        );
        setSearchedMovies([]);
        return;
      }
      setSearchedMovies(searchedResults);
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <SearchBar onChange={updateQueryString} />
      <MoviesList filmsList={searchedMovies} state={{ from: location }} />
    </>
  );
};
