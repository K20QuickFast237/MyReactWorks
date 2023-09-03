import React, { useState } from 'react'
import {plantList} from '../../datas/plantList'
import './ShoppingList.css'
import PlantItem from '../PlantItem/PlantItem'
import Categories from '../Categories/Categories'


export default function ShoppingList({ cart, updateCart}) {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantAdded = cart.find( (plant)=>plant.name===name)
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== name
        )
      updateCart([
        ...cartFilteredCurrentPlant,{name, price, amount: currentPlantAdded.amount +1}
      ])
    } else {
      updateCart([...cart, {name, price, amount: 1}])
    }
  }

  return (
    <div className='lmj-shopping-list'>
      <Categories 
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className='lmj-plant-list'>
        {plantList.map((plant) => (
          (!activeCategory || activeCategory===plant.category) &&
          <div  key={plant.id}>
            <PlantItem
              cover={plant.cover}
              name={plant.name}
              water={plant.water}
              light={plant.light}
              price={plant.price}
            />
            <button onClick={ ()=>addToCart(plant.name, plant.price) } >Ajouter</button>
          </div>
        ),undefined)}
      </ul>
    </div>
  );
}
