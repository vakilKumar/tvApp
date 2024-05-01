/* eslint-disable prettier/prettier */
import { combineReducers } from "@reduxjs/toolkit";
import { dummyProfileReducer } from "../../screens/login/redux/slice";





export const rootReducers = combineReducers({
    dummyApiState: dummyProfileReducer
})