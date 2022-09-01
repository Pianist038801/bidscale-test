import React, { createContext, useContext } from 'react';

import { useAlertReducer } from "../reducers/AlertReducer";

const AlertContext = createContext(null);

export const AlertProvider = ({ children }) => {
  const [alerts, addAlert, removeAlert] = useAlertReducer();

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
