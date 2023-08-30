import { Dispatch } from 'react';
import { Action, ActionType } from '@context/dataUtils';
import { axiosInstence } from '@services/services';
import { TSongObj, TAlbum } from '@types';

export const fetchAlbums = async ({ dispatch, actionType, endPoint }: {
  dispatch: Dispatch<Action>;
  actionType: ActionType;
  endPoint: string;
}): Promise<TAlbum[]> => {
  try {
    const response = await axiosInstence.get(endPoint);
    dispatch({
      type: actionType,
      payload: response.data,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    // Throw the error to the caller for better error handling
    throw error;
  }
};

export const updateSongs = ({ dispatch, albums }: {
  dispatch: Dispatch<Action>;
  albums: TAlbum[];
}) => {
  const allSongs: TSongObj[] = albums.flatMap(album => album.songs);
  dispatch({
    type: ActionType.UPDATE_SONGS,
    payload: allSongs,
  });
};

export const fetchData = async (dispatch: Dispatch<Action>) => {
  try {
    const [topAlbumsData, newAlbumsData] = await Promise.all([
      fetchAlbums({ dispatch, actionType: ActionType.FETCH_TOP_ALBUMS, endPoint: '/albums/top' }),
      fetchAlbums({ dispatch, actionType: ActionType.FETCH_NEW_ALBUMS, endPoint: '/albums/new' }),
    ]);

    const combinedAlbums = [...topAlbumsData, ...newAlbumsData];
    updateSongs({ dispatch, albums: combinedAlbums });
  } catch (error) {
    console.error(error);
  }
};