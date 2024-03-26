import { Route, Routes } from "react-router-dom";
import "./App.css";

// ---> myCurrentImports
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/seeker/HomePage";
import SearchJobs from "./pages/seeker/SearchJobs";
import Messenger from "./pages/Messenger";
import Documents from "./pages/seeker/Documents";
import Applications from "./pages/seeker/Applications";
import Profile from "./pages/seeker/Profile";
import Community from "./pages/Community";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search-jobs" element={<SearchJobs />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
