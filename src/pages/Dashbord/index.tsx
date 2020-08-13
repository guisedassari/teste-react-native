import React, { useState, useEffect, FormEvent } from "react";
import { FiPlus } from "react-icons/fi";
import { api, apikey } from "../../services/api";
import Menu from "../../componets/Menu";
import { Title, Form, Movies } from "./style";

interface MoviesDataResult {
  poster_path: string;
  id: number;
  original_title: string;
  title: string;
  overview: string;
  release_date: Date;
  dataFormated: any;
}

interface MoviesData {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<MoviesDataResult>;
}

const Dashboard: React.FC = () => {
  const [moviesListing, setMoviesListing] = useState<MoviesData>();
  const [newMovie, setNewMovie] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    api
      .get(`movie/popular?api_key=${apikey}&language=en-US&page=1`)
      .then((response) => {
        setMoviesListing(response.data);
      });
  }, []);

  async function handleAddMovie(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (!newMovie) {
      setSearchError("Digite um titulo para pesquisar");
      return;
    }
    try {
      const response = await api.get<MoviesData>(
        `/search/movie?api_key=${apikey}&language=en-US&query=${newMovie}&page=1&include_adult=false`
      );
      setMoviesListing(response.data);
    } catch (error) {
      setSearchError("Nao foi possivel realizar essa operação");
    }
  }

  return (
    <>
      <Menu />
      <Title>Dashboard</Title>
      <Form onSubmit={handleAddMovie}>
        <input
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Buscar Filmes"
        />
        <button>Buscar</button>
      </Form>

      <Movies>
        {moviesListing?.results.map((movie) => {
          return (
            <a key={movie.id} href="teste">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                alt={movie.original_title}
              />
              <div>
                <strong>
                  {movie.original_title}
                  {movie.original_title !== movie.title
                    ? ` (${movie.title})`
                    : ""}
                </strong>
                <p>{movie.overview}</p>
                {/* <span>{}</span> */}
              </div>

              <FiPlus size={20} />
            </a>
          );
        })}
      </Movies>
    </>
  );
};

export default Dashboard;
