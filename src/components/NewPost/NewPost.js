import React, {Component} from 'react';
import axios from 'axios';
import classes from './NewPost.css';

class NewPost extends Component{
    state= {
        title: '',
        content:'',
        author: 'Max'
    }

    postDataHandler = () =>{
        const post ={
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', post)
        .then(response =>{
            console.log(response);
        });
    }


    changeTitle = (props) =>{
        this.setState({title: props.target.value});
    }

    changeContent = (props) =>{
        console.log('fff');
        this.setState({content: props.target.value});
    }


    render(){
        return (
            <div className={classes.all} id='thirdFrame'>
                <h1>Add a post</h1>
                <label>Title</label>
                <input type='text' value={this.state.title} onChange={this.changeTitle}></input><br />
                <label>content</label>
                <textarea rows="6" cols="70" value={this.state.content} onChange={this.changeContent}></textarea><br />
                <label>author</label>
                <select>
                    <option value="Max">Max</option>
                    <option value="Max">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add post</button>
            </div>
        )
    }
}

export default NewPost;