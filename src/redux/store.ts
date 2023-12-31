import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterReducer'
import fromOpenReducer from './features/fromOpen/fromOpenReducer'
import userReducer from './features/user/userReducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formOpen: fromOpenReducer,
    user: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch