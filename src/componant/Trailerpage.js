import React from 'react'
import './Card.css'
import {Link,Route,Switch} from 'react-router-dom'
import App from '../App'


const TrailerPage=(props)=>{ 
   

   if (props.targetMovie) {
    return(
        <div> 
            <Link to='/home'>home page</Link>
        <iframe width="560" height="315" src={props.targetMovie.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <p>{props.targetMovie.description}</p>
      <Switch>
          <Route path='/home' exact component={App}/>
          
      </Switch>

      </div>   
    )
   }else{
       return <div></div>
   }
} 
export default TrailerPage