import { BrowserRouter, Routes, Route, Link } from "react-router";
import MainPage from "./MainPage";
import Register from "./Register";

function App() {
  return (
<>
<nav>
        <Link to="/">Strona główna</Link>
        <Link to="/register">Rejestracja</Link>
      </nav>


      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </>
  );
}

export default App;