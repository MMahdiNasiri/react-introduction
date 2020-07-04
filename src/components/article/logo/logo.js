import React, { Component } from 'react';
import classes from './logo.css';
import ph1 from '../../../assets/image/gear1.png';

class Logo extends Component{
    state ={
        rote: 0,
      }
      componentDidMount = () =>{
        window.addEventListener('scroll', this.handleScroll);
      }
      componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
      handleScroll = () =>{
        const d = window.pageYOffset;
        this.setState({rote: d});
      }    
    
    render(){
        const style = {
            transform: 'rotate(' + this.state.rote + 'deg)'
        }
        return <img src={ph1} alt="?" style={style} className={classes.imglogo}/>
    }
}

export default Logo; 