
import { getMovieCredits, IMAGE_BASE_URL } from "components/utils/ApiMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CastContainer, CastImage, CastItem, CastList } from "./MovieCast.styled";


const MovieCast = () => {
  const [actors, setActors] = useState([]);
  const { detailsId } = useParams();

  useEffect(() => {
    if (detailsId === null) return;
    const fetchActors = async (detailsId) => {
      try {
        const { cast } = await getMovieCredits(detailsId);
        setActors(cast);

      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    };

    fetchActors(detailsId);
  }, [detailsId]);

  const isCast = actors.length !== 0;

  return (
    <CastContainer>
      {isCast ?
        (<CastList>
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
        </CastList>) :
        (<p>We don't have any cast for this movie.</p>)
      }

    </CastContainer>
  );
};

export default MovieCast;

