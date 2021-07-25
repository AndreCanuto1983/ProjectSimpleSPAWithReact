import { MovieItems } from "./MovieItems";

export const MoviesList =({movies}) => (
    <section>
        <ul>
            {movies.map(m => <MovieItems {...m} />)}            
        </ul>
    </section>
);