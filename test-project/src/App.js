import React from 'react'
import "./App.css"
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import UnmountAnimation from "./Unmount Animation/UnmountAnimation"
import Main from "./securionPay-test/Main"

const App = () => {
    return (
        <div className='app' >
            <BrowserRouter>
                <Switch>
                    <Redirect path='/' exact to='/main' />
                    <Route path='/unmount'>
                        <UnmountAnimation />
                    </Route>
                    <Route path='/main'>
                        <Main />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
