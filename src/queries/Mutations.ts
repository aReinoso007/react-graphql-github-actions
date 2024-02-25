import { gql } from "urql";

export const CREATE_POST = gql`
    mutation CreatePost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
            id
            title
            body
        }
    }
`;