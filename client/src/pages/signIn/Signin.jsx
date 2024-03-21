import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../utility/stateprovider";
import "./signin.css";
import axios from "../../utility/axios";
import About from "../../components/about/About";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from React Icons

const Signin = () => {
  const [{ user }, dispatch] = useStateValue();
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
// const handleReload = () => {
//   window.location.reload();
//   };
  useEffect(() => {
    console.log(user)
    if (user) {
      navigate("/");
    }

  }, [navigate]);
  useEffect(() => {
      // handleReload()
},[])
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (errors[field]) {
      setError({
        ...errors,
        [field]: null,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form validation logic here

    try {
      axios.defaults.withCredentials = true;
      const response = await axios.post("api/users/login", form);
      console.log("response:",response)
      const data = response.data;
      console.log("response.data:",response.data)
      if (data) {
        dispatch({
          type: "SET_USER",
          user: {
            token: data.token,
            user: {
              id: data.user["id"],
              userEmail: data.user["email"],
            },
          },
        });
        console.log("user id",user.user.id)
      }
      navigate("/");
    } catch (error) {
      // alert(error.response.data.msg);
        //  setMessage(error.response.data.msg);
      // console.log("Error authenticating user:", error.response.data.msg);
      setError({
        ...errors,
        pass: "Network Error: Unable to reach the server",
      });
    }
  };

  return (
    <div className="container-fluid login_page">
      <div className="container py-5 d-md-flex justify-content-between login_container">
        <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
          <p className="p1">Login to your account</p>
          <p className="p2 text-center">
            Don't have an account?
            <Link to="/signup" className="a3">
              Create a new account
            </Link>
          </p>
          <small className="error__msg text-center">{message}</small>
          <br/>
          <form onSubmit={handleSubmit}>
            <input
              className={`in1 ${message && "error"}`}
              type="email"
              name="email"
              onChange={(e) => setField("email", e.target.value)}
              placeholder="Your Email"
            />
            <div className="password-input-container">
              <input
                className={`in1 ${message && "error"}`}
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={(e) => setField("password", e.target.value)}
                placeholder="Your Password"
              />
              <span className="showHide2" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <FaEyeSlash
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  />
                ) : (
                  <FaEye
                    style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  />
                )}
              </span>
            </div>
            <br/>
            

            <button className="btn1">Signin</button>
          </form>
          <Link to="/forgetpassword" className="a3 a1">
            Forgot password?
          </Link>
        </div>
        <About />
      </div>
    </div>
  );
};

export default Signin;