import React,{useState} from 'react';

import './Card.css';


const MovieCard =(props)=>{
return( <div onClick={() => props.handleTargetMovie(props.title?props.title:"") }  >
  
<div className='card-container'>
<div className='img-container'>
<img src={props.posterUrl} alt=''/>
</div>
<div className='title'>
 <h3>{props.title}</h3>
</div>
<div className='description'>
<p>{props.description}</p>
</div>
<div className='rate'>
<span>rate:{props.rate}</span>

</div>

</div>

</div>)}
export default MovieCard;