import { createFeature, createReducer, on } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";
import { popularTagsActions } from "./action";
import { routerNavigatedAction } from "@ngrx/router-store";

const initialState: PopularTagsStateInterface = {
    isLoading: false,
    error: null,
    data: null,
  };
  
  const popularTagsFeature = createFeature({
    name: 'popularTags',
    reducer: createReducer(
      initialState,
      on(popularTagsActions.getPopularTag, (state) => ({ ...state, isLoading: true })),
      on(popularTagsActions.getTpopularTagSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.popularTags,
      })),
      on(popularTagsActions.getPopularTagFailure, (state) => ({ ...state, isLoading: false })),
    //   on(routerNavigatedAction, () => initialState)
    ),
  });
  
  
  export const {
      name: popularTagsFeatureKey,
      reducer: popularTagsReducer,
      selectIsLoading,
      selectError,
      selectData: selectPopularTagsData,
  } = popularTagsFeature