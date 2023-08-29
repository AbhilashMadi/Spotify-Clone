import { Dispatch } from 'react';
import { Action, ActionType } from '@context/dataUtils';
import { axiosInstence } from '@services/services';

export const fetchTopAlbums = async (dispatch: Dispatch<Action>, 
  actionType: ActionType, 
  endPoint: string): Promise<void> => {
  try {
    const response = await axiosInstence.get(endPoint);
    if (response.status === 200) {
      dispatch({
        type: actionType,
        payload: response.data,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
