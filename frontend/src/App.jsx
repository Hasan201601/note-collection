import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import Login from "./screens/Login/Login";
import PrivateOutlet from "./components/PrivateOutlet/PrivateOutlet";
import NotFound from "./screens/NotFound/NotFound";
import Register from "./screens/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="mynotes" element={<MyNotes />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
