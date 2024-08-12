import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CodeMatcher from "./pages/CodeMatcher";
import NavBar from "./components/NavBar";
import Profile from "./pages/profile";
import TestsPage from "./pages/TestsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BasicReact" element={<CodeMatcher />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Tests" element={<TestsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
