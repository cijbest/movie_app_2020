import React from 'react';
import axios from "axios";
import Movie from "./movies";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    getMovies = async () => { //�񵿱������ axios�� ���� ������ ��ٷȴٰ� �����.
        // await�� �ð��� ���� �ʿ��ؼ� ���� console.log(movies.data.data.movies);
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //rating���� ����

        //this.setState({movies:movies});  ���� movies : state�� ��. ���� movies : axios�� ��.
        this.setState({movies, isLoading: false}); // es6 ������ �ڹٽ�ũ��Ʈ�� ���� �־ movies�� ���־ �ȴ�.
    }
    componentDidMount() { // 6�� �Ŀ� �Լ� �ߵ�
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