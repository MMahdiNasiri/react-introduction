import React, { Component } from "react";
import classes from './sidebar.css'
// import NavBar, { ElementsWrapper } from "react-scrolling-nav"; 
 
class Sidebar extends Component {

  state ={
    showNav: false,
    lineScroll: false
  }
  toggleNav = () =>{
    const doesShow = this.state.showNav;
    this.setState({showNav: !doesShow});
  }
  too = () =>{
    alert(this.props.degree);
  }
  componentDidMount = () =>{
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
}
handleScroll = () =>{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      this.setState({lineScroll: true});
        // document.getElementById("nav").element.classList.Add = classes.effect;
      } 
      else {
        this.setState({lineScroll: false});
        // document.getElementById("nav").style.marginTop = "245px";
        // document.getElementById('nav').style.backgroundColor = 'rgba(202, 200, 200, 0.69)';
      }
  }
  

  render() {
    
    const navbarItems = [
      {
        label: "Item 1",
        target: "item-1"
      },
      {
        label: "Item 2",
        target: "item-2"
      },
      {
        label: "Item 3",
        target: "item-3"
      },
      {
        label: "Item 4",
        target: "item-4"
      },
      {
        label: "Item 5",
        target: "item-5"
      },
      {
        label: "Item 6",
        target: "item-6"
      }
    ];
    let navBar = null;

    let classNav = [classes.sidebar];
    if (this.state.showNav) {
      // classNav = [classes.sidebar , classes.show];
      classNav.push(classes.show);
      console.log(classNav);
    }else{
      // classNav = [classes.sidebar];
      const index = classNav.indexOf(classes.show);
      if (index !== -1) {
        classNav.splice(index, 1);
      }
    }
    if (this.state.lineScroll) {
      classNav.push(classes.scrooling);
    }else{
      const index1 = classNav.indexOf(classes.scrooling);
      if (index1 !== -1) {
        classNav.splice(index1, 1);
      }
    }
    

    
    navBar = (
      <div className={classNav.join(' ')} id='nav'>
            <div name="introduction" className="item">
              <a href="#firstFrame">Introduction</a>
            </div>
            <div name="item-2" className="item">
            <a href="#secondFrame">show data</a>
            </div>
            <div name="item-3" className="item">
              <a  href="#thirdFrame">Add data</a>
            </div>
        </div>
    )

    return (
      <div>
        {/* <NavBar items={navbarItems} offset={-80} duration={500} delay={0} /> */}
        
        <span onClick={this.toggleNav}>&#9776;</span>
        {navBar}
        
      </div>
    );
  }
}
 
export default Sidebar;
