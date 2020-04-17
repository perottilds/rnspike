import { AppState as RNAppState, Platform } from 'react-native';
import { takeEvery } from 'redux-saga/effects';
import { store } from '../../store';

function* appBlurWorker() {
  console.log('blurred');
}

export function* appBlurSaga() {
  const SAGA_APP_BLURRED = '[Saga] App Blurred';

  if (Platform.OS === 'android') {
    yield takeEvery(SAGA_APP_BLURRED, appBlurWorker);

    RNAppState.addEventListener('blur', () => {
      store.dispatch({ type: SAGA_APP_BLURRED });
    });
  }
}
