import React from 'react';
import classes from './item.css';

const item = (props) =>(
    <article onClick={props.clicked}>
        <h3>{props.title}</h3>
        <div>
            <div></div>
        </div>
    </article>);


export default item;