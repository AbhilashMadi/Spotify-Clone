import { Dispatch } from 'react';
import { Action, ActionType } from '@context/dataUtils';
import { axiosInstence } from '@services/services';
import { TSongObj, TAlbum } from '@types';

export const fetchAlbums = async (dispatch: Dispatch<Action>,
  actionType: ActionType,
  endPoint: string): Promise<TAlbum[]> => {
  try {
    const response = await axiosInstence.get(endPoint);
    if (response.status === 200) {
      dispatch({
        type: actionType,
        payload: response.data,
      });
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateSongs = (dispatch: Dispatch<Action>, albums: TAlbum[]) => {
  const allSongs: TSongObj[] = albums.reduce((songs: TSongObj[], album: TAlbum) => {
    return songs.concat(album.songs);
  }, []);

  dispatch({
    type: ActionType.UPDATE_SONGS,
    payload: allSongs,
  });
};