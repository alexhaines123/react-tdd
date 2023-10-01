import React, { useState } from 'react';
import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

const RestaurantListPage = () => {
  const [restaurants, setRestaurants] = useState([])

  const handleAddRestaurant = (name) => {
    setRestaurants([...restaurants, name])
  }
  return (
    <div>
      <button data-test="addRestaurantButton">Add restaurant</button>
      <NewRestaurantForm onSave={handleAddRestaurant} />
      { restaurants}
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default RestaurantListPage