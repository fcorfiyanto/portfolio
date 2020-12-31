import React from 'react';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Connect from './components/Connect';

import './App.css';

import { Layout } from 'antd';

function App() {
    return (
        <Layout>
            <Navigation/>
            <Home/>
            <About/>
            <Work/>
            <Contact/>
            <Connect/>
        </Layout>
    );
}

export default App;
