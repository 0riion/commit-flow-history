
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import commitsReducer from "./features/commits";
import { getEnv } from "../config";

export const store = configureStore({
    reducer: {
        commits: commitsReducer,
    },
    devTools: getEnv().NEXT_PUBLIC_ENVIRONMENT === 'dev',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
