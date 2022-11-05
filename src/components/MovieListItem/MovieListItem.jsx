
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
