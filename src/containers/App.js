import React  , {Component} from 'react';
import './App.css';
import Header from './header/header.js';
import Sidebar from '../components/sidebar/sidebar.js';
import Article from '../components/article/article.js';
import Logo from '../components/article/logo/logo.js';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{
  
  render(){
    
    return(
      <BrowserRouter>
        <div>
            <Header />
            <Sidebar/>
            <Article />
            <Logo />
          {/* <footer></footer> */}
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App;
