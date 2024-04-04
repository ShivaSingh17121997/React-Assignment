import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card'
import { Link } from 'react-router-dom';

export default function List({ title, id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/{$id}`)
      // .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("something is wrong")
      })

  }, []);



  return (
    <div>
      <div className='List-page' >
        <Link to="/customer/:id" >
          <h1>Customer : {id}</h1>
          <h1>{title}</h1>
        </Link>
      </div>

      <div>
        {data.map((item) => {
         return <Card {...item} />
        })}
      </div>

    </div>
  )
}
