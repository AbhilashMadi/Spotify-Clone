import { useContext } from 'react';
import { AppContext } from './ContextProvider';

export type Action = { type: ActionType.FETCH_TOP_ALBUMS, payload: unknown };

export type State = {
  topAlbums: unknown;
};

export enum ActionType {
  FETCH_TOP_ALBUMS = 'FETCH_TOP_ALBUMS',
}

export const reducer = (state: State, action: Action): State => {

  switch (action.type) {
    case ActionType.FETCH_TOP_ALBUMS:
      return { ...state, topAlbums: action.payload }
    default:
      return state;
  }
};

export function useData() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useData must be used within ContextProvider');
  }

  return context;
}