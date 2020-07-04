import React , {Component} from 'react';
import classes from './items.css';
import axios from 'axios';
import Item from './Item/item.js';
// import Aux from '../../hoc/Auxiliary/Auxiliary.js';


class Items extends Component{

    state = {
        posts:[],
        selectedPostId: null
    }

    componentDidMount(){
        axios.get('/posts/')
        .then(response => {
            const posts = response.data.slice(1,10);
            this.setState({posts: posts});
        }).catch(error =>{
            console.log(error);
        });
    }

    postSelectedHandler = (id) =>{
        this.setState({selectedPostId: id})
    }

    render(){

        const posts = this.state.posts.map(post =>{
            return <Item 
            key={post.id} 
            title={post.title}
            clicked={() => this.postSelectedHandler(post.id)}
            selected={this.state.selectedPostId} />
        });


        return(
            <div id='secondFrame' className={classes.items}>
                <h2>get data with axios</h2>
                {posts}
            </div>
        )
    }
}

export default Items;