import React, { useReducer } from "react";
import generalRegisterContext from "./generalRegisterContext";

const generalRegisterContextProvider = ({ children }) => {
  const [register, updateRegister] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      email: "",
      password: "",
      confirm_password: "",
      role: "",
    }
  );

  return (
    <generalRegisterContext.Provider value={{ register, updateRegister }}>
      {children}
    </generalRegisterContext.Provider>
  );
};

export default generalRegisterContextProvider;
