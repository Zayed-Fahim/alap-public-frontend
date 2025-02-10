import { graphql } from '@/gql';
import { useMutation } from '@apollo/client';

const createUserDocument = graphql(`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      ...UserFragment
    }
  }
`);

export const useCreateUser = () => {
  return useMutation(createUserDocument);
};
