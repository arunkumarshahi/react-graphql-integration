import React, { Component, PropTypes } from 'react'
import { addTODO } from '../gql';

import gql from "graphql-tag";
import { compose, graphql } from 'react-apollo';

class AddTodo extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
				
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
         </div>
      )
   }
   handleClick(e) {
      const node = this.refs.input
      const text = node.value.trim()
    //   this.props.onAddClick(text,'active')
    console.log("Data from handleClick = "+text)
      //this.props.addTODOActivity({ variables: {  text,text  }})
     this.props.addTODOActivity1({ variables: {  activityName:text ,status:'active'  }})
      node.value = ''
   }
}

export default compose(graphql(addTODO, { name: 'addTODOActivity1' }))(AddTodo);