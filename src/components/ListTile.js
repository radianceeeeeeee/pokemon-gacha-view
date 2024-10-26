import React from 'react'
import './Tile.css';

export default function ListTile( { name, image, key } ) {
    return (
        <div className="List-Tile" key={key}>
            <img className="List-Image" src={image} alt={name}></img>
            <div className="List-Name">{name}</div>
        </div>
    )
}