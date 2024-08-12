import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CodeMatcher from "./pages/CodeMatcher";
import NavBar from "./components/NavBar";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeMatcher />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
