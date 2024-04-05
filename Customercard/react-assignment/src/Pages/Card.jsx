import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Card() {
    const [cardData, setCardData] = useState(null);
    const [dogData, setDogData] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(9);
    const { id } = useParams();

    const dogFetch = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=9`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            const urls = data.map(photo => photo.url);
            setDogData(urls);
        } catch (error) {
            console.error('Error fetching dog images:', error);
        }
    };

    const handleNextImages = () => {
        const nextStartIndex = startIndex + 9;
        setStartIndex(nextStartIndex);
        setEndIndex(nextStartIndex + 9);
    };

    const handleButtonClick = () => {
        handleNextImages();
        localStorage.setItem('startIndex', startIndex + 1); // Increment and store the start index
    };

    useEffect(() => {
        const storedIndex = localStorage.getItem('startIndex');
        if (storedIndex !== null) {
            setStartIndex(parseInt(storedIndex)); // Retrieve stored index value
        }
    }, []);

    useEffect(() => {
        const fetchCardData = async () => {
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setCardData(data);
            } catch (error) {
                console.error('Error fetching card data:', error);
            }
        };

        fetchCardData();
        dogFetch();
    }, [id, startIndex]);

    return (
        <div>
            <h3>Customer {id}</h3>
            <div className='grid-card'>
                {dogData.map((item, index) => (
                    <div key={index} onClick={handleButtonClick}>
                        <img width="200px" height="200px" src={item} alt={`Dog ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
