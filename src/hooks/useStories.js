import {useQuery} from "@tanstack/react-query";
import {getStories, getStoriesDetails} from "../services/stories.js";


function useStories() {
    const {data: stories, isLoading: isStoriesLoading} = useQuery({
        queryKey: ["stories"],
        queryFn: () => getStories()
    })

    const storyDetails = (storyId) => {
        const {data: story, isLoading: isStoryLoading} = useQuery({
            queryKey: ["storyDetail", storyId],
            queryFn: () => getStoriesDetails(storyId),
        })
        return {story, isStoryLoading}
    }


    return{
        stories,
        isStoriesLoading,
        storyDetails,
    }
}
export default useStories
