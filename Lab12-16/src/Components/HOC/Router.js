import React from 'react';
import {Route, Switch} from "react-router-dom";
import Persons from "../Persons/Persons";
import {Information} from "../Info/Info";
import Edit from "../Edit/Edit";
import Add from "../Add/Add";

export const Router = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <Persons />
            </Route>
            <Route path={'/information'} >
                <Information />
            </Route>
            <Route path={'/edit/:id'} >
                <Edit />
            </Route>
            <Route path={'/add'} >
                <Add />
            </Route>
        </Switch>
    )
};