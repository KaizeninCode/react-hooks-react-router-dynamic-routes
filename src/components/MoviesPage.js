import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch() //gives us an object that contains special info about the currently matched route or in this case, the current URL
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
