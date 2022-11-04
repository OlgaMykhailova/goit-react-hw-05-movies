import { TrendingListItem } from "components/TrendingListItem/TrendingListItem";
import { List } from './TrendingList.styled';

export const TrendingList = ({ trendingFilms }) => {
  return (
    <List>
      {trendingFilms.map(({ id, title }) => (
        <TrendingListItem key={id} title={title} id={id}/>
      ))}
    </List>
  );
};
