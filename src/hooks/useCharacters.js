import { useQuery } from "@tanstack/react-query";
import { CharacterDetails, Characters } from "../services/characters.js";

function useCharacters() {
  const { data: characters, isLoading: isCharactersLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => Characters(),
  });

  const getCharacterDetails = (characterId) => {
    const { data: characterDetail, isLoading: isCharacterDetailLoading } =
      useQuery({
        queryKey: ["characterDetail", characterId],
        queryFn: () => CharacterDetails(characterId),
      });
    return { characterDetail, isCharacterDetailLoading };
  };

  return {
    characters,
    isCharactersLoading,
    getCharacterDetails,
  };
}
export default useCharacters;
