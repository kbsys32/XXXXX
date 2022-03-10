import React from 'react';
import AppRouter from './component/route/RouterComponent';

import Container from '@material-ui/core/Container';
import { Route, BrowserRouter , Switch } from "react-router-dom";

import About from '../src/component/pages/about'
import Services from '../src/component/pages/services';
import Contact from '../src/component/pages/contact';
import SignUp from '../src/component/pages/signup';
import Navbar from "../src/component/Navbar/index";
import SigninComponent from '../src/component/user/SigninComponent'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/services' component={Services} />
                    <Route path='/contact-us' component={Contact} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/signin' component={SigninComponent}/>
                </Switch>
            </BrowserRouter>
            <Container>
                <AppRouter />
            </Container>
        </div>
    );
}

export default App;