import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/Api'

export const MovieDetails = () => {
    const {id} = useParams();
    console.log(id);
    const movie = getMovieDetails(id);
    console.log(movie);
  return (
    <>
      <NavLink to="">Go back</NavLink>
      <img src="" alt=""></img>
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
        pariatur earum error. Iusto minus eaque in dignissimos facilis nihil
        unde officia ullam dolorem atque, laboriosam voluptate eum alias esse
        officiis.
      </p>
      <h3>Subtitle</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error
        mollitia, exercitationem eaque incidunt dolorem corporis cum cupiditate
        maxime nihil, rem nobis unde ducimus ullam officia ratione distinctio.
        Error, cumque.
      </p>
      <h3>Subtitle</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit error
        mollitia, exercitationem eaque incidunt dolorem corporis cum cupiditate
        maxime nihil, rem nobis unde ducimus ullam officia ratione distinctio.
        Error, cumque.
      </p>
    </>
  );
};
