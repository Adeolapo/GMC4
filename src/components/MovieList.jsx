import { useState } from 'react';
import Movie from './movie';
import data from './movied';
import Filter from './filter';
import { NavLink } from 'react-router-dom';

function MovieList() {

  const [movies,setMovies] = useState(data)

  function filterN(e){
    setMovies(() =>{
      movies.filter(movie =>{
        movie.name.toLowerCase()
      })
    })
  }



 /*function gettext(e){
    settext(e.target.value)
  }*/

  return (
    <div className="App">
      <Filter />

      <div className='list'>

       {data.map((info) => <Movie
       key = {info.id}
       id={info.id}
       img = {info.img}
       name= {info.name}
       desc= {info.desc}
       rating={info.rating}
       />)}
      </div>

    </div>
  );
}

export default MovieList;
