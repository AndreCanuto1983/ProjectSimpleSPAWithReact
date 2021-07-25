import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../Api/MoviesService";

export const MovieDetail = () => {
    //hook pega o parâmetro da url e seta na constante id
    const { id } = useParams(); 

    //hook altera o estado do objeto
    const [movie, setMovie] = useState({});
  
    const fetchMovie = async () => {
        const { data } = await MoviesService.getMoviesById(id);
        setMovie(data)
    };

    //hook chama o método quando houver alteração
    useEffect(() => {
        fetchMovie()
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>

            <article>
                {movie.overview}
            </article>
        </>
    )
};