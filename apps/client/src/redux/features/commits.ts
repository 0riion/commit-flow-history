import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Commit } from "../../@types/commit.type";

type TCommitState = {
    commits: Commit[];
    commit: Commit | null;
};

const initialState: TCommitState = {
    commits: [],
    commit: null,
};

const commitsSlice = createSlice({
    name: 'commits',
    initialState,
    reducers: {
        setCommits(state, action: PayloadAction<Commit[]>) {
            state.commits = action.payload;
        },
        setCommit(state, action: PayloadAction<Commit>) {
            state.commit = action.payload;
        },
    },
});

export const { setCommits, setCommit } = commitsSlice.actions;
export default commitsSlice.reducer;
