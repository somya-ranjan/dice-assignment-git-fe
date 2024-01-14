import { all, takeLatest } from "redux-saga/effects";
import { getRepoListData } from "../actions";
import { getRepoListSaga } from "./repo";

function* repoWatcher() {
  yield takeLatest(getRepoListData.type, getRepoListSaga);
}

export default function* rootSaga() {
  yield all([repoWatcher()]);
}
