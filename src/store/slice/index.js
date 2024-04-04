import { createAction, createSlice } from "@reduxjs/toolkit";




export const fetchDataFromDummyApiCreater = createAction('DUMMY/FETCH_DATA_FROM_API');
export const  fetchDataFromDummyApiTypeName = fetchDataFromDummyApiCreater().type;




export const initialStateProfile = {
    apiData: [],
    loader: false,
    apiListData: {}
}

const dummyProfileSlice = createSlice({
    name: 'DUMMYPROFILE',
    initialState: initialStateProfile,
    reducers: {
        setDummyApiData: (state, action) => {
           return{
            ...state,
            apiData: action.payload
           }

        }
    }
})

export const {setDummyApiData} = dummyProfileSlice.actions;
export const dummyProfileReducer = dummyProfileSlice.reducer;

