import React, { Component } from 'react';
import classes from './article.css';
import Items from '../items/items.js';
import NewPost from '../NewPost/NewPost.js';
import Introduction from '../introduction/introduction.js';
import Logo from './logo/logo.js';
// import Picture from '../picture/picture.js';


const Article = ()=>{
    return(
        <div className={classes.content}>
            <Introduction />
            {/* <Picture /> */}
            <Items />
            <NewPost />
            <Logo />
        </div>
    )
}



export default Article;
