import React from 'react';
import { Title } from '../title/title';
//import TodoList from '../todo-list/todo-list';
import {list} from '../../data/list';
import Card from "../card/card";
import "./app.css";

function App () {
    const heroes = list.results;
    return(
        <>
            <Title></Title>
            <div className="wrapper">
                {Array.isArray(heroes) ? heroes.map((hero, index) => {
                    return (
                        <Card key={index} hero={hero} />
                    )
                }) : null}
            </div>
        </>
    )
}

export default App;