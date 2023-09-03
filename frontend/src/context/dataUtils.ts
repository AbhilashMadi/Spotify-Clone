import { useContext } from 'react';
import { AppContext } from '@context/ContextProvider';
import { TAlbum, TSongObj } from '@types';

export type Action = { type: ActionType.FETCH_TOP_ALBUMS, payload: TAlbum[] } |
{ type: ActionType.FETCH_NEW_ALBUMS, payload: TAlbum[] } |
{ type: ActionType.UPDATE_SONGS, payload: TSongObj[] } |
{ type: ActionType.FETCH_PLAYLIST, payload: TAlbum };

export type State = {
  topAlbums: TAlbum[];
  newAlbums: TAlbum[];
  songs: TSongObj[];
  playList: TAlbum;
};

export enum ActionType {
  FETCH_TOP_ALBUMS = 'FETCH_TOP_ALBUMS',
  FETCH_NEW_ALBUMS = 'FETCH_NEW_ALBUMS',
  UPDATE_SONGS = 'UPDATE_SONGS',
  FETCH_PLAYLIST = 'FETCH_PLAYLIST'
}


export const initialState: State = {
  topAlbums: [],
  newAlbums: [],
  songs: [],
  playList: {
    description: '',
    follows: 0,
    id: '',
    image: '',
    slug: '',
    songs: [] as TSongObj[],
    title: '',
  },
};

export const reducer = (state: State, action: Action): State => {

  switch (action.type) {
    case ActionType.FETCH_TOP_ALBUMS:
      return { ...state, topAlbums: action.payload };
    case ActionType.FETCH_NEW_ALBUMS:
      return { ...state, newAlbums: action.payload };
    case ActionType.UPDATE_SONGS:
      return { ...state, songs: action.payload };
    case ActionType.FETCH_PLAYLIST:
      return { ...state, playList: action.payload };
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