import React from 'react';
import { Link } from 'react-router-dom';

export default function List({ title, id }) {
    const handleCardClick = () => {
        window.location.reload(); // Reload the window when any card is clicked
    };

    return (
        <div>
            <div className='List-page' onClick={handleCardClick}>
                <Link style={{ textDecoration: "none" }} to={`/customer/${id}`}>
                    <h1>Customer : {id}</h1>
                    <h1>{title}</h1>
                </Link>
            </div>
        </div>
    );
}
