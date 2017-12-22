import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Classes from './Classes.jsx'
import Posts from './Posts.jsx'

const routes = [
    {
        path: '/forum',
        component: Classes
    },
    {
        path: '/forum/:cl',
        component: Posts
    },
]

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => <Route exact key={route.path} {...route} />)}
            </Switch>
        </BrowserRouter>
    )
}
