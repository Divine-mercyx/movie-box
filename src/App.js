import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Results from './components/results/Results';
import Search from './components/Search';

const App = () => {

 const [theshows, setShows] = useState([]);

 const getShows = async () => {
   try {
     const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=436e03f842a585a8cbf48d9ae03668e8");
     const json = await response.json();
     setShows(json.results);
   } catch (err) {
     console.error(err);
   }
 };

 useEffect(() => {
   getShows();
 }, []);

 return (
   <>
     <Navbar />
     <Search />
     <Results />
     <div className='container p-5'>
     <div className="row">
       {theshows.map((data) => {
         return (
           <div className="col-lg-3 movie card-container" key={data.id}>
             <div className="mb-4 p-1 box container">
               <img alt='nothing' className='container-fluid' src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
               <p className='text-light p-3 mt-2 text-center'>
                <b>Title:</b> <a href='' className='text-light text-decoration-none'>
                  { data.title } ({ data.release_date })
                  </a>
                </p> 
                <div className='overview container p-2'>
                  <h5 className='text-warning'>Overview</h5>
                  <p className='text-secondary'>
                    { data.overview }
                  </p>
                </div>              
             </div>
           </div>
         );
       })}
     </div>
     </div>
   </>
 );
}

export default App;
