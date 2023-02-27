import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./rootSaga";

const sagaMiddldeware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddldeware],
});

sagaMiddldeware.run(rootSaga);

export default store;