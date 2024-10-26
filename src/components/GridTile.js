import React from 'react'
import './Tile.css';

export default function GridTile( { name, image, key } ) {
  return (
    <div className="Grid-Tile" key={key}>
        <img className="Grid-Image" src={image} alt={name}></img>
        <div className="Grid-Name">{name}</div>
    </div>
  )
}