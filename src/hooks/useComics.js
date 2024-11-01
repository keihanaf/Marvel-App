import { useQuery } from "@tanstack/react-query";
import { comics, comicsDetails } from "../services/comics.js";

function useComics() {
  const { data: comic, isLoading: isComicLoading } = useQuery({
    queryKey: ["comic"],
    queryFn: () => comics(),
  });

  const getComicDetails = (comicId) => {
    const { data: comicDetail, isLoading: isComicDetailLoading } = useQuery({
      queryKey: ["comicDetail", comicId],
      queryFn: () => comicsDetails(comicId),
    });
    return { comicDetail, isComicDetailLoading };
  };

  return {
    comic,
    isComicLoading,
    getComicDetails,
  };
}
export default useComics;
