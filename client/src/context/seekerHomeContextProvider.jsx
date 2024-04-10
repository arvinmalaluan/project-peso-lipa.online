import React, { useState } from "react";
import seekerHomeContext from "./seekerHomeContext";

const seekerHomeContextProvider = ({ children }) => {
  const [activePost, setActivePost] = useState(null);

  return (
    <seekerHomeContext.Provider value={{ activePost, setActivePost }}>
      {children}
    </seekerHomeContext.Provider>
  );
};

export default seekerHomeContextProvider;
