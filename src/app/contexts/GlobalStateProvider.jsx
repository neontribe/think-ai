'use client';
import { createContext, useContext, useState, useMemo } from "react";

// createContext wants parameters, but it's useful if react errors
const GlobalStateContext = createContext(undefined, undefined);

export function GlobalStateProvider({ children }) {
  const [state, setState] = useState({
    auth: false // we're not authed by default
  });

  // prevents aggressive re-renders
  const value = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
}
