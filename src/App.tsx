import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Layout from './routers';

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

export default App;
