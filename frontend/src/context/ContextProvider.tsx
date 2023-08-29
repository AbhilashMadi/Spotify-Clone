import { FC, createContext, ReactNode, useReducer, Dispatch } from 'react';
import { State, Action, reducer } from './dataUtils';
import { useNavigate } from 'react-router-dom';

interface ContextValue {
  state: State;
  dispatch: Dispatch<Action>,
  navigateToRoute: (path: string) => void,
}

const initialState: State = {
  topAlbums: [],
};

const AppContext = createContext<ContextValue | undefined>(undefined);

interface IContextProvider {
  children: ReactNode;
}

const ContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigateToRoute = useNavigate();

  return <AppContext.Provider
    value={{ state, dispatch, navigateToRoute }}>
    {children}
  </AppContext.Provider>;
};

export { AppContext, ContextProvider };