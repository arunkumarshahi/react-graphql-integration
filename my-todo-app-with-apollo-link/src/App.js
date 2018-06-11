import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/DisplayTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
      Add your todo here ::
       <AddTodo/>

       List of added activities :
       <TodoList/>
      </div>
    );
  }
}

export default App;
