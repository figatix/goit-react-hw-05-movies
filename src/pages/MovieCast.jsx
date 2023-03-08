
import { getMovieCredits, IMAGE_BASE_URL } from "components/ApiMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CastImage = styled.img`
  border-radius: 50%;
`;

export const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { detailsId } = useParams();
  console.log("detailsId", detailsId);

  useEffect(() => {
    if (detailsId === null) return;
    const fetchActors = async (detailsId) => {
      try {
        const { cast } = await getMovieCredits(detailsId);
        console.log(cast);
        setActors(cast);

      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    };

    fetchActors(detailsId);
  }, [detailsId]);

  return (
    <CastList>
      {actors.map(({ id, name, character, profile_path }) => {
        const profileImageUrl = profile_path
          ? `${IMAGE_BASE_URL}w500${profile_path}`
          : 'https://via.placeholder.com/150x225?text=No+Image';
        return (
          <CastItem key={id + character}>
            <CastImage src={profileImageUrl} alt={name} width="150" height="225" />
            <h4>{name}</h4>
            <p>{character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};




// import { getMovieCredits } from "components/ApiMovies"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"


// export const MovieCast = () => {
//   const [actors, setActors] = useState([])
//   const { detailsId } = useParams();
//   console.log("detailsId", detailsId);

//   useEffect(() => {
//     if (detailsId === null) return
//     const fetchActors = async (detailsId) => {
//       const { cast } = await getMovieCredits(detailsId);
//       console.log(cast);
//       setActors(cast)
//     }

//     fetchActors(detailsId)
//   }, [detailsId])


//   return (
//     <ul>
//       {
//         actors.map(({ id, name, character, profile_path }) => {
//           return (
//             <li key={id + character}>
//               <img src={profile_path} alt={name} width="100" height="200" />
//               <h4>{name}</h4>
//               <p>{character}</p>
//             </li>
//           )
//         })
//       }

//     </ul>

//   )
// }

// // 