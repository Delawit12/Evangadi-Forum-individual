import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

// //components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Signup from "./pages/signup/Signup";
import Signin from "./pages/signIn/Signin";
import Forget_password from "./pages/forget_password/Forget_password";
import Code_enter from "./pages/forget_password/Code_enter";
import NewPassword from "./pages/forget_password/NewPassword";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import SingleQuestion from "./pages/singleQuestion/SingleQuestion";
import Success from "./pages/Sucsess/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
        <Route
          path="/forgetpassword"
          element={
            <>
              <Forget_password />
            </>
          }
        />
        <Route
          path="/codeEnter"
          element={
            <>
              <Code_enter />
            </>
          }
        />
        <Route
          path="/newPassword"
          element={
            <>
              <NewPassword />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header /> <Signin />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
            </>
          }
        />

        <Route
          path="/AskQuestion"
          element={
            <>
              <Header /> <AskQuestion />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        />

        <Route
          path="/SingleQuestion/:id"
          element={
            <>
              <Header />
              <SingleQuestion />
            </>
          }
        />

        <Route path="/questions/:id" element={<SingleQuestion />} />

        <Route path="/Success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
