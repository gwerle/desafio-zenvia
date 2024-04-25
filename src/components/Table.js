import React, { useEffect, useState } from 'react'
import { getFoodItems } from '../services/FoodService';
import TableItem from './TableItem';
import TotalAmount from './TotalAmount'
import MyAmount from './MyAmount';

export default function Table() {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        getFoodItems().then((response) => {
          setFoodItems(response.data)
        })
    }, [])

    return (
      <div id='main'>
          <TotalAmount />
          <MyAmount />
          <h1>Meu Carrinho de Compras</h1>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Preço</td>
                <td>Quantidade</td>
                <td>Preço total</td>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((item) => {
                return <TableItem item={item} />
              })}
            </tbody>
          </table>
      </div>
    )
}
