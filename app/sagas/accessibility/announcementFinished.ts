import { takeEvery } from 'redux-saga/effects';
import {
  AccessibilityAnnoucementFinishedEvent,
  AccessibilityInfo,
  Platform,
} from 'react-native';
import { store } from '../../store';

const SAGA_ANNOUNCEMENT_FINISHED_CHANGED = '[Saga] Announcement Finished Changed';

function* announcementFinishedWorker({
  payload,
}: {
  payload: AccessibilityAnnoucementFinishedEvent;
}) {
  console.log('announcementFinished', payload);
}

export function* accessibilityAnnouncementFinishedSaga() {
  if (Platform.OS === 'ios') {
    yield takeEvery<{
      type: typeof SAGA_ANNOUNCEMENT_FINISHED_CHANGED;
      payload: AccessibilityAnnoucementFinishedEvent;
    }>(SAGA_ANNOUNCEMENT_FINISHED_CHANGED, announcementFinishedWorker);

    AccessibilityInfo.addEventListener('announcementFinished', (newValue) => {
      store.dispatch({
        type: SAGA_ANNOUNCEMENT_FINISHED_CHANGED,
        payload: newValue,
      });
    });
  }
}