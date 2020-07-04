import React from 'react';
import classes from './introduction.css';
import Personal from './personal/personal.js';
import Ability from './ability/ability.js';


const introduction = () =>{
    
    return(
        <div className={classes.introduction} id="firstFrame">
            <h2>Introduction</h2>
            <Personal />
            <Ability />
        </div>
    );
}

export default introduction;

