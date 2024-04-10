import React, { useState } from "react";
import generalSettingsContext from "./generalSettingsContext";

const generalSettingsContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("#public-profile");

  return (
    <generalSettingsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </generalSettingsContext.Provider>
  );
};

export default generalSettingsContextProvider;
