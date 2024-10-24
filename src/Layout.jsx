import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Avatar from "./pages/Avatar.jsx";
import ChoiceAvatar from "./pages/ChoiceAvatar.jsx";
import Questions from "./pages/Questions.jsx";

export default function Layout() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/choice-avatar" element={<ChoiceAvatar />} />
          <Route path="/questions/:idavatar" element={<Questions />} />
        </Routes>
      </Router>
    </div>
  );
}
