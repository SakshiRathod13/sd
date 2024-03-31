import React from 'react';
import './App.css';
import Header from './header';
import Add from './add';
import Contact from './contact';
// import ContactList from './contactList';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const contact=[
    {
      id:1,
      name:"Amit",
      email:"sahua@.com",
    },{
      id:2,
      name:"Amit",
      email:"sahua@.com",
    },{
      id:3,
      name:"Amit",
      email:"sahua@.com",
    },{
      id:4,
      name:"Amit",
      email:"sahua@.com",
    },{
      id:5,
      name:"Amit",
      email:"sahua@.com",
    }
  ]
  return(
  <div>
    <Header/>
    <Add/>
    <Contact contact={contact}/>


  </div>);
}

export default App;
