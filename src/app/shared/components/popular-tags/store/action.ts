import { createActionGroup, props, emptyProps } from "@ngrx/store";
import { GetPopularTagsResponseInterface } from "../types/getPopularTagsResponse.interface";
import { PopularTagType } from "../../../types/popularTag.type";

export const popularTagsActions = createActionGroup({
    source: 'popular tags',
    events: {
        'Get popular tag': emptyProps(),
        'Get tpopular tag Success': props<{popularTags: PopularTagType[]}>(),
        'Get popular tag Failure': emptyProps()
    }
})