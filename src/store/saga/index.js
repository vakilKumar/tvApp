/* eslint-disable prettier/prettier */
import { call, takeLatest } from "redux-saga/effects";
import { fetchDataFromDummyApiTypeName } from "../slice";
import axios from "axios";
import { NetworkService } from "../../service";






export function* fetchDummyApiData(){
    yield takeLatest(fetchDataFromDummyApiTypeName, fetchDataFromDummyApi);
}


function* fetchDataFromDummyApi(){

    try {
        // const response = yield axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('=====>>>>>> NetworkService.get`${NetworkService.API.jsonPlaceHolderApi <<<==================', NetworkService.API.jsonPlaceHolderApi)
        const response = yield call(NetworkService.get,`${NetworkService.API.jsonPlaceHolderApi}`, {})
        console.log('======== response ============>>>>>>>', response)
    } catch (error) {
        console.log('-------- fetchDataFromDummyApi error--------', error)
        
    }
}