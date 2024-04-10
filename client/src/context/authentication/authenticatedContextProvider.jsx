import React, { useContext, useEffect, useReducer, useState } from "react";
import authenticatedContext from "./authenticatedContext";
import { getProfile } from "../../apis/get.api";
import generalLoginContext from "./generalLoginContext";

const authenticatedContextProvider = ({ children }) => {
  const { authenticator } = useContext(generalLoginContext);
  const [profFound, setProfFound] = useState(false);

  const [profile, updateProfile] = useReducer(
    (prev, next) => {
      const newEvent = { ...prev, ...next };

      return newEvent;
    },
    {
      name: "Not set",
      bio: "Not set",
      location: "Not set",
      portfolio_link: "Not set",
      gender: "Not set",
      educational_attainment: "Not set",
      fb_link: "Not set",
      ig_link: "Not set",
      ln_link: "Not set",
      fkid_account: authenticator.id,
    }
  );

  useEffect(() => {
    try {
      getProfile(authenticator.id)
        .then((data) => {
          console.log(data);
          if (data.success) {
            updateProfile(data.results[0]);
            setProfFound(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <authenticatedContext.Provider
      value={{ profile, updateProfile, profFound, setProfFound }}
    >
      {children}
    </authenticatedContext.Provider>
  );
};

export default authenticatedContextProvider;
