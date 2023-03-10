

import { getMovieReviews } from "components/utils/ApiMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ReviewAuthor, ReviewContent, ReviewItem, ReviewList, ReviewsContainer } from "./MovieReviews.styled";


const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { detailsId } = useParams();

  useEffect(() => {
    const fetchReviews = async (idFilm) => {
      try {
        const { results } = await getMovieReviews(idFilm);
        setReviews(results);
      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    };

    fetchReviews(detailsId);
  }, [detailsId]);

  const isReviews = reviews.length !== 0;

  return (
    <ReviewsContainer>
      {isReviews ? (
        <ReviewList>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ReviewAuthor>{author}</ReviewAuthor>
              <ReviewContent>{content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ReviewsContainer>
  );
};

export default MovieReviews;
