import React from 'react'
import { Routes, Route } from "react-router-dom"
import Card from "./Card"

export default function routes() {
    return (
        <div>
            <Routes>
                <Route path='/customer/:id' element={<Card />} />
            </Routes>
        </div>
    )
}
