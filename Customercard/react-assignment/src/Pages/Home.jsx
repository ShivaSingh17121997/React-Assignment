
import React, { useEffect, useState } from 'react';

import List from './List';


export default function Home() {
    const [data, setData] = useState([]);


    const fetchdata = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=1000`);

            const data = await res.json();
           // console.log(data);

            setData(data)

        } catch (error) {
            console.log(error);
        }
    };

  




    useEffect(() => {
        fetchdata();
       

    }, setData );


    return (
        <div style={{ display: "flex", justifyContent: "start" }} >

            <div style={{ width: "30%" }} >
                {data?.map((item) => {
                    return <List key={item.id} {...item} />
                })}
            </div>

        </div>
    )
}
