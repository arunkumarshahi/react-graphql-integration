import gql from 'graphql-tag';

export const addTODO = gql`
  mutation addTODOActivity($activityName: String!,$status: String!) {
    addTODOActivity(activityName: $activityName,status: $status) @client {
      activityName
    }
  }
`;