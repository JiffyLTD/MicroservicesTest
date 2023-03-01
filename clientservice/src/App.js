import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import Error from "./Pages/Error";
import Login from "./Components/Account/Login";
import Register from "./Components/Account/Register";
import { AuthContext } from "./Context/index";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('AccessToken') !== null){
      setIsAuth(true);
    }
  },[]);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <Header />
      <div
        className="container px-4 py-5 mb-5"
        style={{ background: "#053566" }}
        id="icon-grid"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
            <Route path="/error" element={<Error />} />
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="*" element={<Navigate replace to="/error" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
