import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
import Filter from './components/filter';
import data from './components/movied';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Description from './components/desc';
import MovieList from './components/MovieList'

function App() {

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
      {/* <Filter />
      <div className='list'> */}

       {/* {data.map(info =>{
        return <Link to={`/description/${info.id}`}><Movie 
        key = {info.id}
        img = {info.img}
        name= {info.name}
        desc= {info.desc}
        rating={info.rating}
        /></Link>
       })} */}
       {/* {data.map((info) => <Movie
       key = {info.id}
       id={info.id}
       img = {info.img}
       name= {info.name}
       desc= {info.desc}
       rating={info.rating}
       />)} */}
      {/* </div> */}

      <Routes>
        <Route path={'/'} element={<MovieList />}></Route>
        <Route path={'/description/:id'} element={<Description data={data} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
