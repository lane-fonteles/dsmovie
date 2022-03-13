import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { Fragment } from "react";

function Listing() {
  return (
    <>
      <Pagination />
      <MovieCard />
    </>
  );
}

export default Listing;
