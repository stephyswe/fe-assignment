import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./assets/normalize.css";

// Pages
import Landing from "./pages/landing";
import SearchPage from "./pages/search/search";
import DetailPage from "./pages/detail/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/search/:id" element={<SearchPage />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
