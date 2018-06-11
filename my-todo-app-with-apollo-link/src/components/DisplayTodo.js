import React, { Component, PropTypes } from 'react'
import Todo from './Todo.js'
import { getTodoQuery,getTodoActivities } from '../gql';
import gql from "graphql-tag";
import { compose, graphql } from 'react-apollo';

 class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todoActivity.map(todo =>
               <Todo
                  key = {todo.id}
                  {...todo}
               />
            )}
         </ul>
      )
   }
}

export default compose(
    //graphql(updateHeaderPageName, {name: 'updatePageNameData'}),
    graphql(getTodoQuery, getTodoActivities),
    
   
  )(TodoList);