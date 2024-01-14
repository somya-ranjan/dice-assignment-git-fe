import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRepoListLoading: false,
  repoListData: [],
};
const reposSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    getRepoListStart: (state) => {
      state.isRepoListLoading = true;
    },
    getRepoListSuccess: (state, { payload }) => {
      state.repoListData = payload;
      state.isRepoListLoading = false;
    },
    getRepoListFailed: (state) => {
      state.isRepoListLoading = false;
      state.repoListData = [];
    },
  },
});

export const { getRepoListStart, getRepoListSuccess, getRepoListFailed } =
  reposSlice.actions;

export default reposSlice.reducer;
