import { takeLatest, call, put, select, takeEvery, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, setTasks, selectTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield delay(900);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield put(alert("Ups... Cannot get examples!"));
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
