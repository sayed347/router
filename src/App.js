import MovieList from './componant/MovieList';
import React,{useState} from 'react';
import './App.css';
import Filter from './componant/Filter';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import TrailerPage from './componant/Trailerpage'




function App() {

  
  const [targetMovie,setTargetMovie] = useState("")

  const handleTargetMovie = (movie) => {
setTargetMovie(movies.filter(el => el.title == movie)[0])
console.log(movie + " from app.js")
  }
  

  const [movies,setmovies]=useState([{posterUrl:'/mechanic.jpg',title:'mechanic',description:'when the women he loves is kidnapped by an old enemy,retired hit man arthur bichop is forced to tackle a list of assassinatuoons missions',rate:'9',link:'/mechanic-trailer',trailer:'https://www.youtube.com/embed/G-P3f_wDXvs'},
  {posterUrl:'/wanted.jpg',title:'wanted',description:'after wesley gibson discovers that his murdered father belonged to a secret guild of assassins, he hones his innate killing skils and turns avenger',rate:'8', link:'wanted-trailer',trailer:'https://www.youtube.com/embed/edpEspHOeVU'},
  {posterUrl:'/equilizer.jpg',title:'equilizer',description:'retired intelligence operative robert Mccall reluctantly returns to action to protect a young prostitute',rate:'8',link:'equilizer-trailer',trailer:'https://www.youtube.com/embed/u1QU2_NFd9Y'},
  {posterUrl:'/killerElite.jpg',title:'killer elite',description:'in his globe-trotting thriller, a former special ops agent is forced out of retirement when his mentor is kidnapped by a ruthless criminal',rate:'6',link:'killer-trailer',trailer:'https://www.youtube.com/embed/bArBdVnzY4k'}]);
 
 const [searchInput,setsearchInput]=useState('');
 const [searchRate,setsearchRate]=useState('')
   function handelInput(e){
 setsearchInput(e.target.value)
 };
 function handleRate(e){setsearchRate(e.target.value)};
 let filterMovie=movies.filter((movie)=>{return movie.title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())} )
  let filterRate=movies.filter((movie)=>{return movie.rate>=searchRate})
   const [value,setValue]=useState({title:'',description:'',posterUrl:'',rate:''})
   const handleChange=(event)=>{
   
   setValue({...value,[event.target.name]:event.target.value})
 }
const addMovie=(e)=>{
  e.preventDefault();
  document.forms[0].reset()
  movies.push(value);
  
}
  return (
    <div className='app-wrapper'  >
      <form onSubmit={addMovie}>
        <input value={value.posterUrl}name='posterUrl'type='text' placeholder='image' onChange={handleChange}/>
        <input value={value.title}name='title'type='text' placeholder='title'  onChange={handleChange}/>
        <input value={value.description}name='description'type="text" placeholder='description'  onChange={handleChange}/>
        <input valie={value.rate}name='rate'type="text" placeholder='rate'  onChange={handleChange}/>
        <button type='submit'> add</button>
      </form>
      <div className='search-bar'>
      <Filter handleInput={handelInput} handleRate={handleRate}/>
      </div>
      <div>
     { !targetMovie && <MovieList  movies={filterMovie} handleTargetMovie={handleTargetMovie} />}
      
      </div>
      <Switch>
      

     <Route path='/details'  render={(props)=><TrailerPage targetMovie={targetMovie} {...props} />}/> 

       </Switch>   
      </div>
    
  );
}

export default App;
