import { Link } from 'react-router-dom';

export const MovieListItem = ({ id, title, state }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} state={state}>
        {title}
      </Link>
    </li>
  );
};
