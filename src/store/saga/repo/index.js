import { put } from "redux-saga/effects";
import {
  getRepoListStart,
  getRepoListSuccess,
  getRepoListFailed,
} from "../../actions";
import errorHandler from "../../../utility/errorHandler";
import toaster from "../../../lib/toaster";

export function* getRepoListSaga({ payload }) {
  const { search, sort } = payload;
  yield put(getRepoListStart());
  yield errorHandler({
    endpoint: `search/repositories?q=${search}${sort ? `&sort=${sort}` : ""}`,
    successHandler: yield function* (response) {
      yield put(getRepoListSuccess(response));
    },
    failHandler: yield function* (response) {
      yield put(getRepoListFailed());
      toaster.error(response);
    },
    failHandlerType: "CUSTOM",
    apiType: "get",
  });
}
