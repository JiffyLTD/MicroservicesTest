import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Error from "./Pages/Error";

function App() {
  return (
    <div>
      <Header />
      <div
        className="container px-4 py-5 mb-5"
        style={{ background: "#053566" }}
        id="icon-grid"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/error" element={<Error/>} />
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="*" element={<Navigate replace to="/error" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
