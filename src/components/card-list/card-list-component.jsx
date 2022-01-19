import react from "react";
import './card-list.styles.css';

export const CardList = props=>(
    <div className="card-list">
        {props.monstors.map(monstor =>(
        <h1 key= {monstor.id}>{monstor.name}</h1>
        ))}
    </div>
);

//timestamp 1:30:19