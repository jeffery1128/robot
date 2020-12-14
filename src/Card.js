import React, {Component} from 'react';

const Card = ({id,name,email}) =>{
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}></img>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}
export default Card;