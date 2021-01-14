import React from 'react';
import './styles/App.scss'
import Layout from "./Components/HOC/Layout";
import {Router} from "./Components/HOC/Router";

export const App = () => (
    <div className={'App'}>
        <Layout>
            <Router/>
        </Layout>
    </div>
);