import { PropTypes } from 'prop-types';
export const SearchBar = ({ onChange }) => {
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.elements.searchValue.value;
    onChange(searchValue);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search movies" name='searchValue'></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
 };
