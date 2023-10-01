import React, { useState } from 'react';

const NewRestaurantForm = ({ onSave }) => {

  const [inputText, setInputText] = useState('')

  const textHandler = (evt) => {
    setInputText(evt.target.value)
  }

  const handleSave = () => {
    onSave(inputText)
  }

  return (
    <div><input type='text' value={inputText} onChange={textHandler} data-test="newRestaurantName"></input>
      <button data-test="saveNewRestaurantButton" onClick={handleSave}>Add</button></div>
  )
}

export default NewRestaurantForm