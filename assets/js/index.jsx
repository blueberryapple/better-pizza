import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App.jsx'

const render = (Component) => {
    return ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Route path='/' component={Component} />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./App.jsx', () => render(App))
}
