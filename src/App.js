import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
import Filter from './components/filter';
import data from './components/movied';
import { useState } from 'react';

function App() {

  const [movies,setMovies] = useState(data)

  function filterN(e){
    setMovies(() =>{
      movies.filter(movie =>{
        movie.name.toLowerCase()
      })
    })
  }



  function gettext(e){
    settext(e.target.value)
  }
  return (
    <div className="App">
      <Filter />
      <div className='list'>
       {data.map(info =>{
        return <Movie 
        img = {info.img}
        name= {info.name}
        desc= {info.desc}
        rating={info.rating}
        />
       })}
      </div>

     
    </div>
  );
}

export default App;
