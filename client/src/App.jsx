import { Route, Routes } from "react-router-dom";
import "./App.css";

// ---> myCurrentImports
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/seeker/HomePage";
import SearchJobs from "./pages/seeker/SearchJobs";
import Messenger from "./pages/Messenger";
import Documents from "./pages/seeker/Documents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search-jobs" element={<SearchJobs />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </>
  );
}

export default App;
