import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../queries/Mutations";
import { Button, Container } from "react-bootstrap";

const CreatePostPage: React.FC = () => {

    const [createPost, {loading, error}] = useMutation(CREATE_POST, {
        variables: {
            title: "Hello",
            body: "World"
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Container>
            <Button onClick={()=> createPost()}>Create Post</Button>
        </Container>
    );
}

export default CreatePostPage;