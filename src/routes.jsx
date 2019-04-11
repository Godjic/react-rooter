// src/routes.jsx

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import History from './History'

export default function MainRouter() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/History" component={History} />
            </div>
        </Router>
    )
}