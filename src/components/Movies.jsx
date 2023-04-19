import { Movie } from './Movie'
import not_found from './not_found.png';

function Movies(props) {
    const { movies = [] } = props;

    return <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (

            /* <h4>Not found</h4>*/
            <img src={not_found} alt="" />

        )}
    </div>;
}
export { Movies };