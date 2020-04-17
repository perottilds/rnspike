import { AnyAction } from 'redux';
import { fallbackLang } from '../translations';

export const APP_SET_STATE = '[APP] Set State';

type State = {
  isInitialized: boolean;
  isForeground: boolean;
  locale: string;
};

const initialState: State = {
  // https://wix.github.io/react-native-navigation/docs/app-launch#android
  isInitialized: false,
  isForeground: false,
  locale: fallbackLang.languageTag,
};

export function appReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case APP_SET_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export function setAppState(state: Partial<State>): AnyAction {
  return {
    type: APP_SET_STATE,
    payload: state,
  };
}
