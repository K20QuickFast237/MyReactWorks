import React from 'react'

function Cart() {
    const art1= 'monstera', part1 = 8,
        art2 = 'plierre', part2 = 10,
        art3 = 'bouquet', part3 = 8;
  return (
    <div>
        <h2>Panier</h2>
        <ul>
            <li>{art1}: {part1}</li>
            <li>{art2}: {part2}</li>
            <li>{art3}: {part3}</li>
        </ul>
        Total: {part1+part2+part3} €
    </div>
  )
}

export default Cart