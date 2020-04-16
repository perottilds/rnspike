import { store } from './store';
import { setAppState } from './store/app.duck';
import { bootstrap as navigationBootstrap } from './navigation/bootstrap/boostrap';
import { rootSaga } from './sagas/root';
import { AppState } from './store/store';

export async function bootstrap() {
  const {
    app: { isInitialized, isForeground },
  }: AppState = store.getState();
  console.log('bootstrap', { isInitialized, isForeground });

  if (!isInitialized) {
    store.runSaga(rootSaga);
    store.dispatch(setAppState({ isInitialized: true, isForeground: true }));
  }

  await navigationBootstrap();
}
