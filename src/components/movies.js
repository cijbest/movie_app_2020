import React from "react";
import {Link} from "react-router-dom";
import PropType from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}/>
                <div className="movie__date">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genres, index) => ( // map에서 제공하는 item number. 이름은 자유롭게 설정가능.
                            <li key={index} className="genres__genres">{genres}</li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 140)}...</p>
                    
                </div>
            </div>
        </Link>
    )
}

Movie.prototype = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType
        .arrayOf(PropType.string)
        .isRequired
};

export default Movie;