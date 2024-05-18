
import { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com/?apikey=60ac016c';


function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
searchMovie("Batman")
  },[])

  return (
    <>
      <div className='app'>
        <h1>MovieSpace</h1>

        <div className='search'>
          <input placeholder='Search for movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

          <img src={SearchIcon} alt="search" onClick={() => searchMovie(searchTerm)}/>
        </div>

        {movies?.length>0?(
          <div className='container'>
            {movies.map((movies)=>(
        <MovieCard movies={movies} />
            ))}
          </div>
        ):(
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )}

      </div>
    </>
  )
}

export default App
