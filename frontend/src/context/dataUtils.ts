import { useContext } from 'react';
import { AppContext } from '@context/ContextProvider';
import { TAlbum, TSongObj } from '@types';

export type Action = { type: ActionType.FETCH_TOP_ALBUMS, payload: TAlbum[] } |
{ type: ActionType.FETCH_NEW_ALBUMS, payload: TAlbum[] } |
{ type: ActionType.UPDATE_SONGS, payload: TSongObj[] };

export type State = {
  topAlbums: TAlbum[];
  newAlbums: TAlbum[];
  songs: TSongObj[];
};

export enum ActionType {
  FETCH_TOP_ALBUMS = 'FETCH_TOP_ALBUMS',
  FETCH_NEW_ALBUMS = 'FETCH_NEW_ALBUMS',
  UPDATE_SONGS = 'UPDATE_SONGS',
}


export const initialState: State = {
  topAlbums: [],
  newAlbums: [],
  songs: [],
};

export const reducer = (state: State, action: Action): State => {

  switch (action.type) {
    case ActionType.FETCH_TOP_ALBUMS:
      return { ...state, topAlbums: action.payload };
    case ActionType.FETCH_NEW_ALBUMS:
      return { ...state, newAlbums: action.payload };
    case ActionType.UPDATE_SONGS:
      return { ...state, songs: action.payload };
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