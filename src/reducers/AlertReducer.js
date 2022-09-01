import { useReducer, useCallback } from "react";
import { v1 as uuidv1 } from 'uuid';

const initialAlerts = [
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!action.payload.id) {
         action.payload.id = uuidv1();
      }

      return [...state, action.payload];

    case "REMOVE":
      const { id } = action;
      const delId = state.findIndex((item) => item.id === id);

      if (delId > -1) {
        return state.splice(delId, 1);
      } else return state;

    default:
      return state;
  }
};

export const useAlertReducer = () => {
  const [alerts, dispatch] = useReducer(reducer, initialAlerts);

  const addAlert = useCallback(
    (payload) => {
      if (payload.id && alerts.findIndex(item => item.id === payload.id) > -1) {
        alert('Can not add an alert with duplicate ID');
        return;
      }

      if (!payload.id) {
        payload.id = uuidv1();
      }
      
      const timeLimit = payload.timeLimit ?? 10;

      dispatch({ type: "ADD", payload });

      setTimeout(() => {
        dispatch({ type: "REMOVE", id: payload.id });
      }, timeLimit * 1000);
    },
    [alerts, dispatch]
  );

  const removeAlert = useCallback(
    (id) => dispatch({ type: "REMOVE", id }),
    [dispatch]
  );

  return [alerts, addAlert, removeAlert];
}
