import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
    const [user, setUser] = useState([])

    useEffect(() => {

        // fetch(`https://jsonplaceholder.typicode.com/photos`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setUser(data);
        //     })
        //     .catch((error) => console.log("Something is wrong in fetching"))

        const fetchdata = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=800`);
                if (!res.ok) {
                    throw new Error("failed to fetch data");
                }
                const data = await res.json();
                console.log(data);

                setUser(data);

            } catch (error) {
                console.log(error);
            }
        }

        fetchdata();

    }, [])

    return (
        <div>

            <div>
                {user.map((item) => {
                    return (
                        <div>
                            <h1>{`Customer no : ${item.id}`}</h1>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
