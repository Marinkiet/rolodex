import react from "react";
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = props=>(
    <div className="card-list">
        {props.monstors.map(monstor =>(
        <Card key={monstor.id}monstor={monstor}/>
        ))}
    </div>
);

