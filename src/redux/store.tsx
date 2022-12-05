import { configureStore } from "@reduxjs/toolkit";
import forgotPasswordEmailSlice from "./reducers/forgotPasswordEmailSlice";
import loginEmailSlice from "./reducers/loginEmailSlice";
import modalSlice from "./reducers/modalSlice";
import regDetailsSlice from "./reducers/regDetailsSlice";
import OtpRegSlice from "./reducers/registerOtpSlice";
import emailSlice from "./reducers/registerSlice";
import resetPasswordSlice, {
  resetPasswordAsyncThunk,
} from "./reducers/resetPasswordSlice";
import restaurantListSlice from "./reducers/restaurantListSlice";

export const store = configureStore({
  reducer: {
    modalStatus: modalSlice.reducer,
    restaurantList: restaurantListSlice.reducer,
    verifyEmail: emailSlice.reducer,
    verifyOtpReg: OtpRegSlice.reducer,
    regDetails: regDetailsSlice.reducer,
    verifyLoginEmail: loginEmailSlice.reducer,
    FPverifyEmail: forgotPasswordEmailSlice.reducer,
    resetPass: resetPasswordSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
