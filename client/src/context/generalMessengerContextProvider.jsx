import React, { useState } from "react";
import generalMessengerContext from "./generalMessengerContext";

const generalMessengerContextProvider = ({ children }) => {
  const [activeConvo, setActiveConvo] = useState(null);

  return (
    <generalMessengerContext.Provider value={{ activeConvo, setActiveConvo }}>
      {children}
    </generalMessengerContext.Provider>
  );
};

export default generalMessengerContextProvider;
