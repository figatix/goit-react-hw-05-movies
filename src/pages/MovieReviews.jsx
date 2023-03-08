

import { getMovieReviews } from "components/ApiMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const ReviewsContainer = styled.div`
  padding: 0 30px;
`

const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ReviewItem = styled.li`
  margin-bottom: 2rem;
`;

const ReviewAuthor = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ReviewContent = styled.p`
  font-size: 1.2rem;
`;

export const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { detailsId } = useParams();

  useEffect(() => {
    const fetchReviews = async (idFilm) => {
      try {
        const { results } = await getMovieReviews(idFilm);
        setReviews(results);
        console.log(" zdssafsd ", results);

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










// import { getMovieReviews } from "components/ApiMovies"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// export const MovieReviews = () => {
//   const [reviews, setReviews] = useState('')
//   const { detailsId } = useParams();

//   useEffect(() => {

//     const fetchReviews = async (idFilm) => {
//       const { results } = await getMovieReviews(idFilm)
//       console.log(results);
//       setReviews(results)
//     }

//     fetchReviews(detailsId)
//   }, [detailsId])

//   const isReviews = reviews.length !== 0

//   return (
//     <ul>
//       {
//         isReviews ?
//           reviews.map(({ id, author, content }) => {
//             return (
//               <li key={id}>
//                 <h4>{author}</h4>
//                 <p>{content}</p>
//               </li>
//             )
//           }) :
//           `We don't have any reviews for this movie.`
//       }

//     </ul>
//   )
// }


// // 