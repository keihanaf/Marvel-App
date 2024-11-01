import { useQuery } from "@tanstack/react-query";
import {getSeries, getSeriesDetails} from "../services/series.js";

function useSeries() {
    const {data: series, isLoading: isSeriesLoading} = useQuery({
        queryKey: ["series"],
        queryFn: () => getSeries()
    })

    const seriesDetails = (seriesId) => {
        const { data: seriesDetail, isLoading: isSeriesDetailLoading } = useQuery({
            queryKey: ["seriesDetail", seriesId],
            queryFn: () => getSeriesDetails(seriesId),
        });
        return { seriesDetail, isSeriesDetailLoading };
    };

    return {
        series,
        isSeriesLoading,
        seriesDetails,
    };
}
export default useSeries;
