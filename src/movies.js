import React from "react";
import PropType from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movies__movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__date">
                <h3
                    className="movie__title"
                    style={{
                        backgroundColor: "red"
                    }}>{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="genres">
                    {genres.map((genres, index) => ( // map에서 제공하는 item number. 이름은 자유롭게 설정가능.
                        <li key={index} className="genres__genres">{genres}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
                
            </div>
        </div>
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