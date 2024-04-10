import React, { useState } from "react";
import seekerSearchJobContext from "./seekerSearchJobContext";

const seekerSearchJobContextProvider = ({ children }) => {
  const [activePost, setActivePost] = useState(null);

  return (
    <seekerSearchJobContext.Provider value={{ activePost, setActivePost }}>
      {children}
    </seekerSearchJobContext.Provider>
  );
};

export default seekerSearchJobContextProvider;
