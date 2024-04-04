import { createSelector } from "@reduxjs/toolkit";

const dummyApiList = state => state.dummyProfile.apiData


const dummyProfileApiListSelector = createSelector(
    [dummyApiList], (dummyApiList) => dummyApiList
)


export const dummyProfileSelector = {
    getDummyApiListData: () => dummyProfileApiListSelector
}