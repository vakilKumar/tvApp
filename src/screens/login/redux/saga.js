/* eslint-disable prettier/prettier */
import { call, put, takeLatest } from "redux-saga/effects";
// import { fetchDataFromDummyApiTypeName } from "../slice";
import axios from "axios";
import { fetchDataFromDummyApiTypeName, loginAction, setDummyApiData } from "./slice";
import { NetworkService } from "../../../service";






export function* fetchDummyApiData(){
    yield takeLatest(fetchDataFromDummyApiTypeName, fetchDataFromDummyApi);
}


function* fetchDataFromDummyApi(){
    try {
        yield put(loginAction.setIsLoading(true));
        const response = yield call(NetworkService.get,`${NetworkService.API.jsonPlaceHolderApi}`, {})

        console.log('======== saga response ============>>>>>>>', response)
        if(response.data) {
           yield put(loginAction.setDummyApiData({
            list: response.data
           }))
        }
        yield put(loginAction.setIsLoading(false));
    } catch (error) {
        yield put(loginAction.setIsLoading(false));
        console.log('-------- fetchDataFromDummyApi error--------', error)
        
    }
}