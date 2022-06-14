import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import postsReducer from "../features/posts/postsSlice";
import usersReduser from "../features/users/usersSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    posts: postsReducer,
    users: usersReduser,
  },
});
