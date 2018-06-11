import gql from 'graphql-tag';
console.log("evaluting again - ")

export const getTodoQuery  = gql`
query getTodoQuery {
    apolloTODODemo @client {
    todoActivity
  }
}`;


export const getTodoActivities = {
  props: ({ data: { apolloTODODemo: { todoActivity  } } }) => ({
    todoActivity
  })
};

console.log("getPageNameOptions - "+JSON.stringify( getTodoActivities))