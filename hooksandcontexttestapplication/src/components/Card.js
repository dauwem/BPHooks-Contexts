import React from 'react';

// assets/css
import '../assets/css/Card.scss';

function Card(props) {
  return (
    <div className="Card__Container">
      <p>{ props.role }</p>
      { props.children }
    </div>
  );
}

export default Card;