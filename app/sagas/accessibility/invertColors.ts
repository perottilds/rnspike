import { takeEvery } from 'redux-saga/effects';
import { AccessibilityInfo, Platform } from 'react-native';
import { store } from '../../store';

const SAGA_INVERT_COLORS_CHANGED = '[Saga] Invert Colors Changed';

function* invertColorsChangedWorker({ payload }: { payload: boolean }) {
  console.log('invertColors', payload);
}

export function* accessibilityInvertColorsChangedSaga() {
  if (Platform.OS === 'ios') {
    yield takeEvery<{
      type: typeof SAGA_INVERT_COLORS_CHANGED;
      payload: boolean;
    }>(SAGA_INVERT_COLORS_CHANGED, invertColorsChangedWorker);

    AccessibilityInfo.addEventListener('invertColorsChanged', (newValue) => {
      store.dispatch({ type: SAGA_INVERT_COLORS_CHANGED, payload: newValue });
    });
  }
}