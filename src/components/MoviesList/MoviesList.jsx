import { MovieListItem } from "components/MovieListItem/MovieListItem";
import { List } from './MoviesList.styled';

export const MoviesList = ({ filmsList, state }) => {
  return (
    <List>
      {filmsList.map(({ id, title }) => (
        <MovieListItem key={id} title={title} id={id} state={state}/>
      ))}
    </List>
  );
};
