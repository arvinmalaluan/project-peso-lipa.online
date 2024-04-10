import React, { useReducer, useState } from "react";
import generalLoginContext from "./generalLoginContext";

const generalLoginContextProvider = ({ children }) => {
  const [authenticator, updateAuthenticator] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      isLoggedIn: false,
      role: null,
      id: null,
    }
  );

  const [login, updateLogin] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      email: "",
      password: "",
    }
  );

  return (
    <generalLoginContext.Provider
      value={{ login, updateLogin, authenticator, updateAuthenticator }}
    >
      {children}
    </generalLoginContext.Provider>
  );
};

export default generalLoginContextProvider;
