import React, { useState } from 'react'

export default function TableItem({item}) {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>R$ {item.price}</td>
      <td>
        <button >-</button>
          <p id="count">{itemQuantity}</p>
        <button>+</button>
      </td>
      <td>R$ 0</td>
    </tr>
  )
}
