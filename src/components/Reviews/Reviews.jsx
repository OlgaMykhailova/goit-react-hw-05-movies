import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieReviews } from '../../services/Api';

export const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();
  console.log(reviewsList);

  useEffect(() => {
    loadReviews(movieId);
  }, [movieId]);

  const loadReviews = async movieId => {
    try {
      const responseData = await getMovieReviews(movieId);
      console.log(responseData);
      const reviewsList = responseData.results.map(
        ({ author, content }) => {
          const castItem = { author, content };
          return castItem;
        }
      );
      if (reviewsList.length === 0) {
        Notify.failure('Sorry, there are no reviews by this film');
        return;
      }
      setReviewsList(reviewsList);
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  return (
    <ul>
      {reviewsList.map(({ author, content }) => (
        <li key={author}>
            <p>AUTHOR: {author}</p>
            <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};