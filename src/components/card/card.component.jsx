import React from 'react';

import './card.styles.css'
export const Card = props=>(
    <div className ='card-container'>
        <img alt="monstor" src={`https://robohash.org/${props.monstor.id}?set=set2&size=180x180`}></img>
        <h2 >{props.monstor.name}</h2>
        <p>{props.monstor.email}</p>
        <p>{props.monstor.address.city}</p>
        <p>{props.monstor.address.street}</p>
    </div>
)