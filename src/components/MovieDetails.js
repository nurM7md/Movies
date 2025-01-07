import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  console.log(param.id);
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=3a9754a073e16e672d7a65e17b043e74&&language=en`
    );

    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              className="img-movie"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="ph"
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                FilmName : {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                FilmDate : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                RatingVote : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Rating : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom"> the story : </p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary mx-2"
            >
              back to main
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#b45b35", border: "none" }}
              className="btn btn-primary"
            >
              Watch Film
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
