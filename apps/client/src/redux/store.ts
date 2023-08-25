
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
    devTools: process.env.NODE_ENV !== "production", // TODO: get from env settings
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
