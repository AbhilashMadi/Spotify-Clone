import { FC, createContext, ReactNode, useReducer, Dispatch } from 'react';
import { State, Action, reducer, initialState } from '@context/dataUtils';
import { useNavigate } from 'react-router-dom';
import { ToastProvider } from '@ui/toast';

interface ContextValue {
  state: State;
  dispatch: Dispatch<Action>,
  navigateToRoute: (path: string) => void,
}

const AppContext = createContext<ContextValue | undefined>(undefined);

interface IContextProvider {
  children: ReactNode;
}

const ContextProvider: FC<IContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigateToRoute = useNavigate();

  return <AppContext.Provider
    value={{ state, dispatch, navigateToRoute }}>
    <ToastProvider>
      {children}
    </ToastProvider>
  </AppContext.Provider>;
};

export { AppContext, ContextProvider };