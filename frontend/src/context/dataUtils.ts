import { useContext } from 'react';
import { AppContext } from './ContextProvider';

export type Action = { type: ActionType.INCREMENT } | { type: ActionType.DECREMENT };

export type State = {
  count: number;
};

export enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export function useData(){
  const context = useContext(AppContext);
  if(context === undefined){
    throw new Error('useData must be used within ContextProvider');
  }

  return context;
}