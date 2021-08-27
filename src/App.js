import React , {Component} from 'react';
import UserRequest from './requestAPI/request-api';
import Header from './headerComponent/header';
import Footer from './footerComponent/footer';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>      
        <div>
          <Header />
        </div>
        <div className="app">
          <UserRequest login="ashley"/>
          <UserRequest login="kumarswamybalam"/>
          <UserRequest login="ivey"/>
          <UserRequest login="bmizerany"/>
        </div>
        
      </div>

    );
  }
}

export default App;