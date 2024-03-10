import React, { useState } from "react";
import seekerResumeContext from "./seekerResumeContext";

const SeekerResumeContextProvider = ({ children }) => {
  const [resume, setResume] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <seekerResumeContext.Provider value={{ resume, setResume, page, setPage }}>
      {children}
    </seekerResumeContext.Provider>
  );
};

export default SeekerResumeContextProvider;
