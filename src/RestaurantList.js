import React from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <ul>{restaurants.map(r => {
      <li key={r}>{r}</li>
    })}
    </ul>
  )
}

export default RestaurantList