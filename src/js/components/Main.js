import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Policies from './Policies';
import News from './News';
import App from './App.jsx';
import Advantage from './Advantage';
import Faculty from './Faculty';
import Calendar from './Calendar';
import Curriculum from './Curriculum';
import Summer from './Summer';
import Nutcracker from './Nutcracker';
import Companies from './Companies';
import Musicals from './Musicals';
import Scholarship from './Scholarship';
import Contact from './Contact';

const Main = () => (
    <main>
        <Switch>
            <Route path='/policies' component={Policies}/>
            <Route path='/news' component={News}/>
            <Route path='/advantage' component={Advantage}/>
            <Route path='/faculty' component={Faculty}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/curriculum' component={Curriculum}/>
            <Route path='/summer' component={Summer}/>
            <Route path='/nutcracker' component={Nutcracker}/>
            <Route path='/companies' component={Companies}/>
            <Route path='/musicals' component={Musicals}/>
            <Route path='/scholarship' component={Scholarship}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </main>
)

export default Main;
