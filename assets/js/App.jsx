import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Classes from './Classes/Classes.jsx'
import Posts from './Posts/Posts.jsx'

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
    const routeList = routes.map((route) => {
        return <Route exact key={route.path} {...route} />
    })

    return (
        <BrowserRouter>
            <Switch>
                { routeList }
            </Switch>
        </BrowserRouter>
    )
}
