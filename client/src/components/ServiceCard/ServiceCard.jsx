import React from 'react';
import './ServiceCard.css';
import { truncate } from 'lodash';
import { useNavigate } from 'react-router-dom';

const isExternalLink = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};

const ServiceCard = ({ card }) => {
  const navigate = useNavigate();
  
  const imageUrl = isExternalLink(card.image)
    ? card.image
    : `http://localhost:3003/${card.image}`;

  return (
    <div className="flexColStart r-card" onClick={() => navigate(`../service/${card.id}`)}>
      <img src={imageUrl} alt="image" />
      <span className="primaryTexto">{truncate(card.title, { length: 17 })}</span>
      <span className="secondaryTexto">{truncate(card.description, { length: 80 })}</span>
    </div>
  );
};

export default ServiceCard;
//had lcode dial asmaa 2ila bghitih 
// import React from 'react'
// import './ServiceCard.css'
// import {truncate} from 'lodash'
// import { useNavigate } from 'react-router-dom';
// const ServiceCard = ({card}) => {

//   const navigate = useNavigate();
//   return (
//     <div className="flexColStart r-card"
//     onClick={()=>navigate(`../service/${card.id}`)}>
//                 <img src={`http://localhost:3003/${card.image}`} alt="image" />

//                 <span className="primaryText">{truncate(card.title, {length: 17})}</span>
//                 <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
//               </div>
//   )
// }

// export default ServiceCard
