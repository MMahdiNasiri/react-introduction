import React, {Component} from 'react';
import classes from './header.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action.js';




class Header extends Component {
    // state={
    //     head : '',
    //     i: 0 ,
    //     showHead: true
    // }
    

    componentDidMount = () =>{
        window.addEventListener('scroll', this.handleScroll);
      }
      componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () =>{
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.height = "50px";
            document.getElementById("logo").style.fontSize = "25px";
            this.props.changeShowToFalse();
          } 
          else {
            document.getElementById("navbar").style.height = "280px";
            document.getElementById("logo").style.fontSize = "35px";
            this.props.changeShowToTrue();
          }
      }
      

    render(){
        
        const headertext = () =>{
            if( this.props.counter <= 20 ){
                this.props.addHead();
            }
        }
        setTimeout(headertext, 200);
        let headClass = [classes.head];
        if (this.props.showing) {
            headClass.push(classes.showHead);
          }else{
            const index1 = headClass.indexOf(classes.showHead);
            if (index1 !== -1) {
              headClass.splice(index1, 1);
            }
          }
          
        


        return(
            <div className={classes.header} id='navbar'>
                <h1 id='logo'>Just  A Sample</h1>
                <div className={classes.container}>
                    <div id={classes.p1}>Mohammad Mahdi Nasiri</div>
                    <div id={classes.right}>help Me to develop my self</div>
                </div>
                <p className={headClass.join(' ')}>{this.props.headtxt}</p>
            </div>
          
        )
    }
}

const mapStateToProps = state =>{
  return{
    headtxt: state.head,
    counter: state.i,
    showing: state.showHead
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    addHead: () => dispatch({type: actionTypes.ADDINGHEAD}),
    changeShowToFalse: () => dispatch({type: actionTypes.CHANGETOFALSE}),
    changeShowToTrue: () => dispatch({type: actionTypes.CHANGETOTRUE})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);