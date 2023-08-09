import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function Index() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const res = await api.get("movie/now_playing", {
        params: {
          api_key: "b8b4bd547d55142381b7bc08d04047ca",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(res.data.results.slice(0, 10));
      setLoading(false);
    }
    loadFilmes();
  });

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes..</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
