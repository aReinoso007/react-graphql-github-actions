
import { useQuery } from "@apollo/client";
import { GET_CHARACTER, GET_CHARACTERS } from "../queries/Queries";

export const useCharacters = () => {
    const { data, loading, error } = useQuery(GET_CHARACTERS);
    return { data, loading, error };
}

export const useCharacter = (id: string) => {
    const { data, loading, error } = useQuery(GET_CHARACTER, {
        variables: { id, }
    });
    return { data, loading, error };
}