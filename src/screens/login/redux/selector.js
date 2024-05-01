/* eslint-disable prettier/prettier */
import { createSelector } from "@reduxjs/toolkit";

const dummyApiList = state => state.dummyApiState.apiData;

const loading = state => state.dummyApiState.isLoading


const dummyProfileApiListSelector = createSelector(
    [dummyApiList], (dummyApiList) => dummyApiList
)
const loadingSelector = createSelector(
    [loading], (loading) => loading
)


export const dummyProfileSelector = {
    getDummyApiListData: () => dummyProfileApiListSelector,
    getLoading: () => loadingSelector
}