
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import List from './List';


export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos?limit=100")
            // .then((res) => res.json())
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err)=>{
                console.log("something is wrong")
            })

    }, [])



    return (
        <div style={{ display: "flex", justifyContent: "start" }} >
            <div style={{ width: "30%" }} >
                {data?.map((item) => <List {...item} />)}
            </div>

            <div>

            </div>
        </div>
    )
}
