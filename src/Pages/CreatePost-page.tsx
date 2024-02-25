import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../queries/Mutations";
import { Button, Container } from "react-bootstrap";

const CreatePostPage: React.FC = () => {

    const [createPost, {loading, data, error}] = useMutation(CREATE_POST, {
        variables: {
            title: "Hello",
            body: "World"
        }
    });

    return (
        <Container>

            <Button onClick={()=> createPost()}>Create Post</Button>
        </Container>
    );
}