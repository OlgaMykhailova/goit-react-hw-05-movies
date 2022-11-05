import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieSearch } from '../services/Api';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const location = useLocation();

  const onSubmit = searchQuery => {
    if (searchQuery.trim().length === 0) {
      Notify.warning('Please enter a word for search');
      return;
    }
    loadSearchedMovies(searchQuery);
  };

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
        return;
      }
      setSearchedMovies(searchedResults);
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        ></input>
        <button type="submit">Search</button>
      </form>
      <TrendingList trendingFilms={searchedMovies} state={{ from: location }} />
    </>
  );
};
