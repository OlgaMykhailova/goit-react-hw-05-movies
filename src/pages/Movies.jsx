import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);

  const onSubmit = searchQuery => {
    if (searchQuery.trim().length === 0) {
      Notify.warning('Please enter a word for search');
      return;
    }

    setSearchedMovies(searchQuery);
    console.log(searchedMovies)
    // setImages([]);
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
    <TrendingList trendingFilms={searchedMovies}/></>
  );
};
