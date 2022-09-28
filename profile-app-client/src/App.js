import { Routes, Route } from "react-router-dom";
import './App.css';
import IsPrivate from "./components/IsPrivate";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        {/* <Route exact path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route exact path="/login" element={<IsAnon><LoginPage /></IsAnon>} /> */}
              
      </Routes>
    </div>
  );
}

export default App;
