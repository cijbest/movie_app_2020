import React from 'react';
import axios from "axios";
import Movie from "./movies";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => { //비동기식으로 axios가 끝날 때까지 기다렸다가 계속함.
        // await는 시간이 조금 필요해서 넣음 console.log(movies.data.data.movies);
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //rating으로 정렬

        //this.setState({movies:movies});  앞의 movies : state의 것. 뒤의 movies : axios의 것.
        this.setState({movies, isLoading: false}); // es6 버전의 자바스크립트를 쓰고 있어서 movies만 써주어도 된다.
    }
    componentDidMount() { // 6초 후에 함수 발동
        this.getMovies();
    }
    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">{
                    isLoading
                        ? (
                            <div className="loader">
                                <span className="loader__text">Loading...</span>
                            </div>
                        )
                        : (
                            <div className="movies">
                                {
                                    movies.map(movie => (
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            poster={movie.medium_cover_image}
                                            genres={movie.genres}
                                            />
                                    ))
                                }
                            </div>
                        )
                }
            </section>
        )
    }
}

export default App;