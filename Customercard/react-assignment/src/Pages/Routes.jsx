import React from 'react'
import { Routes, Route } from "react-router-dom"
import Card from "./Card"
import Home from './Home'

export default function MainRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/customer/:id' element={<Card />} />
            </Routes>
        </div>
    )
}
