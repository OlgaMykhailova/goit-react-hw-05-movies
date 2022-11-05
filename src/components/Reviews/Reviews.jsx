import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getMovieReviews } from '../../services/Api';
import { List, Item, TextAuthor } from './Reviews.styled';

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
      const reviewsList = responseData.results.map(({ author, content }) => {
        const castItem = { author, content };
        return castItem;
      });
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
    <>
      {reviewsList?.length ? (
        <List>
          {reviewsList.map(({ author, content }) => (
            <Item key={author}>
              <TextAuthor>AUTHOR: {author}</TextAuthor>
              <p>{content}</p>
            </Item>
          ))}
        </List>
      ) : (
        <p>We don't have any reviews for this film</p>
      )}
    </>
  );
};
