import { Route, Routes } from "react-router-dom";
import "./App.css";

// ---> myCurrentImports
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/seeker/HomePage";
import SearchJobs from "./pages/seeker/SearchJobs";
import Documents from "./pages/seeker/Documents";
import Applications from "./pages/seeker/Applications";
import Profile from "./pages/seeker/Profile";
import RProfile from "./pages/recruiter/Profile";
import Community from "./pages/seeker/Community";
import Settings from "./pages/Settings";
import RSettings from "./pages/recruiter/Settings";
import Register from "./pages/Register.Page";
import R_Home from "./pages/recruiter/R_Home";
import JobPosting from "./pages/recruiter/JobPosting";
import NewPost from "./components/--job-posts/NewPost";
import ApplicantTracking from "./pages/recruiter/ApplicantTracking";
import CandidateSearch from "./pages/recruiter/CandidateSearch";
import Messenger from "./pages/seeker/Messenger";

import GeneralSettingsContextProvider from "./context/generalSettingsContextProvider";
import SeekerHomeContextProvider from "./context/seekerHomeContextProvider";
import SeekerSearchJobContextProvider from "./context/seekerSearchJobContextProvider";

import GeneralRegisterContextProvider from "./context/authentication/generalRegisterContextProvider";
import AuthenticatedContextProvider from "./context/authentication/authenticatedContextProvider";
import { useContext, useEffect } from "react";
import generalLoginContext from "./context/authentication/generalLoginContext";
import { decodeJWT } from "./utils/function";
import EditPost from "./components/--job-posts/EditPost";

function App() {
  const { authenticator, updateAuthenticator } =
    useContext(generalLoginContext);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      const decodedToken = decodeJWT(window.localStorage.getItem("token"));

      updateAuthenticator({
        isLoggedIn: true,
        role: decodedToken.payload.role,
        id: decodedToken.payload.id,
      });
    }
  }, []);

  return authenticator.isLoggedIn ? (
    <>
      {authenticator.role === 2 ? (
        <AuthenticatedContextProvider>
          <Routes>
            {/* prettier-ignore */}
            <Route path="/" element={ <SeekerHomeContextProvider><HomePage /></SeekerHomeContextProvider> } />

            {/* prettier-ignore */}
            <Route path="/search-jobs" element={ <SeekerSearchJobContextProvider><SearchJobs /></SeekerSearchJobContextProvider> } />
            <Route path="/documents" element={<Documents />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/community" element={<Community />} />

            {/* prettier-ignore */}
            <Route path="/settings" element={ <GeneralSettingsContextProvider><Settings /></GeneralSettingsContextProvider> } />
          </Routes>
        </AuthenticatedContextProvider>
      ) : (
        <AuthenticatedContextProvider>
          <Routes>
            <Route path="/" element={<R_Home />} />
            <Route path="/recruiter/job-posting" element={<JobPosting />} />
            <Route path="/recruiter/new-post" element={<NewPost />} />
            <Route path="/recruiter/edit-post" element={<EditPost />}>
              <Route path=":id/:fk/" element={<EditPost />} />
            </Route>
            <Route path="/recruiter/profile" element={<RProfile />} />
            <Route
              path="/recruiter/settings"
              element={
                <GeneralSettingsContextProvider>
                  <RSettings />
                </GeneralSettingsContextProvider>
              }
            />
            <Route
              path="/recruiter/applicant-tracking"
              element={<ApplicantTracking />}
            />
            <Route
              path="/recruiter/candidate-search"
              element={<CandidateSearch />}
            />
          </Routes>
        </AuthenticatedContextProvider>
      )}
    </>
  ) : (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<LoginPage />} />

      {/* prettier-ignore */}
      <Route path="/signup" element={ <GeneralRegisterContextProvider><Register /></GeneralRegisterContextProvider> } />
    </Routes>
  );
}

export default App;
