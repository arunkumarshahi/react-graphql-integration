import gql from 'graphql-tag';
export const addTODOActivity= (_obj, { activityName,status }, { cache }) => {
  console.log("inside default method "+JSON.stringify(cache))
  console.log("inside default method activityName= "+activityName)
  console.log("inside default method status = "+JSON.stringify(status))
  const query  = gql`
    query GetPageName {
        apolloTODODemo @client {
        todoActivity
      }
    }`;
  const previousState = cache.readQuery({ query });
  console.log("previousState = "+JSON.stringify(previousState))
  const data = {
    apolloTODODemo: {
    ...previousState.apolloTODODemo,
    todoActivity:[...previousState.apolloTODODemo.todoActivity,{activityName:activityName,status:status }]
    },
  };
  console.log("data after update  = "+JSON.stringify(data))

  cache.writeQuery({
    query,
    data,
  });
  console.log("writeQuery = "+JSON.stringify(query)+" ::::data::::"+JSON.stringify(data))
  return null;
};