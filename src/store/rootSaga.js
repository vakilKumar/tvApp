/* eslint-disable prettier/prettier */
import { all } from "redux-saga/effects";
import { fetchDummyApiData } from "../screens/login/redux/saga";

const rootSaga = function* () {
  yield all([
    fetchDummyApiData()
  ]);
};

export default rootSaga;