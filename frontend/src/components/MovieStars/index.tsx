import { ReactComponent as StarFull } from "assets/img/estrela.svg";
import { ReactComponent as StarHalf } from "assets/img/estrelaa.svg";
import { ReactComponent as StarEmpty } from "assets/img/estrelava.svg";
function MovieStars() {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}
export default MovieStars;
