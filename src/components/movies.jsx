import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getMovie } from '../services/fakeMovieService';

class Movies extends Component {
    state = {movies:getMovies()} 
    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id)
        this.setState({movies})
    }

    render() { 
        const {length:movieCount} =this.state.movies
        if(movieCount===0)return <p>There are no movies in the database.</p>
        return (
            <>   
                <p>Showing {movieCount} movies in the database</p> 
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie=>(
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td> 
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}
 
export default Movies;