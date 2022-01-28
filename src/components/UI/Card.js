import React from 'react';
import './Card.css';

//To render the card look - in this case for each MeetupItem
function Card(props){
    return <div className="card">{props.children}</div>;
}
export default Card;