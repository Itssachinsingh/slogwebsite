import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faEmptyStar } from '@fortawesome/free-solid-svg-icons';

export const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} color="#fbc02d" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} color="#fbc02d" />);
    } else {
      stars.push(<FontAwesomeIcon icon={faEmptyStar} key={i} color="#ccc" />);
    }
  }

  return <div>{stars}</div>;
};