'use client';
import { createContext, useContext, useState, useMemo } from 'react';

// create the context; the initial value is not critical here
const GlobalStateContext = createContext(undefined);

export function GlobalStateProvider({ children }) {
  const [state, setState] = useState({
    auth: false // we're not authed by default
  });


  // we can let other components register fresh state in the global context
  const registerValue = (key, value) => {
    setState(( prevState ) => ({ ...prevState, [key]: value }));
  };

  // prevents aggressive re-renders
  const value = useMemo(() => ({ state, setState, registerValue }), [state]);

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}
