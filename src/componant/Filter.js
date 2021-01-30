import React from 'react';
import './Card.css';
const Filter=(props)=>{
    return(
        <div className='filter-wrapper'>
            <input type="text" placeholder="search by title..." onChange={props.handleInput}/>
            <input type="text" placeholder="search by rate..." onChange={props.handleRate}/>
        </div>
        
    )
}
export default Filter;