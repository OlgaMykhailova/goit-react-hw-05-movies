import { PropTypes } from 'prop-types';
import { LinkStyled } from './MovieListItem.styled';

export const MovieListItem = ({ id, title, state }) => {
  return (
    <li>
      <LinkStyled to={`/movies/${id}`} state={state}>
        {title}
      </LinkStyled>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  state: PropTypes.object,
};
