import React from 'react';

import './card.styles.css'
export const Card = props=>(
    <div className ='card-container'>
        <img alt="monstor" src={`https://robohash.org/${props.monstor.id}?set=set2&size=140x140`}></img>
        <h2 >{props.monstor.name}</h2>
        <p>{props.monstor.address.city}</p>
       
    </div>
)