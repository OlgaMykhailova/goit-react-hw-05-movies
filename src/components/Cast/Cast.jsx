import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieCast } from '../../services/Api';
import { List, Item, CardThumb, Text, Image } from './Cast.styled';

export const Cast = () => {
  const [actorsList, setActorsList] = useState([]);
  const { movieId } = useParams();
  console.log(actorsList);

  useEffect(() => {
    loadCast(movieId);
  }, [movieId]);

  const loadCast = async movieId => {
    try {
      const responseData = await getMovieCast(movieId);
      console.log(responseData.cast);
      const castList = responseData.cast.map(
        ({ character, name, profile_path }) => {
          const castItem = { character, name, profile_path };
          return castItem;
        }
      );
      if (castList.length === 0) {
        Notify.failure('Sorry, there are no cast information by this film');
        return;
      }
      setActorsList(castList);
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  return (
    <List>
      {actorsList.map(({ character, name, profile_path }) => (
        <Item key={character}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
            }
            alt={name}
            width="300"
          ></Image>
          <CardThumb>
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </CardThumb>
        </Item>
      ))}
    </List>
  );
};
