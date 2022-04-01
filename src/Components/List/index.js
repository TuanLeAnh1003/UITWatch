import React from 'react';
import './List.css';

function List({img, title, list}) {
  return (
    <div className="list" style={{backgroundImage: `url(${img})`}}>
      <div className="list__overlay">
        <h2>{title}</h2>
        <p>{list.item1}</p>
        <p>{list.item2}</p>
        <p>{list.item3}</p>
      </div>
    </div>
  )
}

export default List