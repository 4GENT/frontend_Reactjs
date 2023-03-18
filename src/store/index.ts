import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import assetSlice from "./slice/auth/assets";

const store = configureStore({
	reducer: {
		auth: authSlice,
		assets: assetSlice
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
