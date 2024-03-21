import React, { useState } from 'react';
import './forget_password.css';
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from '../../utility/axios';
import { useStateValue } from '../../utility/stateprovider';
import About from '../../components/about/About';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const NewPassword = () => {
  const [{ user }, dispatch] = useStateValue();
  const [form, setForm] = useState({});
  const [errors, setError] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [conshowPassword, setConShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const contogglePasswordVisibility = () => {
    setConShowPassword(!conshowPassword);
  };
 
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

  console.log(form)
  const validateForm = () => {
    return form.password == form.c_password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    // if (validateForm()) {
      try {
      
    form.email = user.email;
    // console.log("form.email = ",user.email)
    // console.log("user.email=",form.email)
   
    
        axios.defaults.withCredentials = true;
        // form.newPassword = user.newPassword;
        // console.log("form.newPassword = ",form.newPassword)
        // console.log("user.newPassword=",user.newPassword)
        console.log(form);
        const response = await axios.post("api/users/newPassword", form);
        const data = response.data;
        console.log(response)
        console.log(data)
        if (data.message === 'Password changed successfully') {
        //   dispatch({
        //     type: 'SET_USER',
        //     user: null,
        //   });
          navigate('/success');
        }
        // console.log(data);
      } catch (error) {
        console.log('Error authenticating user:', error.message);
        setMessage(error.message);
        setError({
          ...errors,
          pass: 'Network Error: Unable to reach the server',
        });
      }
    // } else {
    //   setMessage("Passwords don't match");
    // }
  };

  return (
    <div className="container-fluid login_page">
      <div className="container py-5 d-md-flex justify-content-between login_container">
        <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
          <p className="p1">Enter new password</p>
          <p className="p2 text-center">
            Don't have an account?
            <Link to="/signup" className="a3">
              Create a new account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className={`in11 ${message && 'error'}`}
              type={showPassword ? 'text' : 'password'}
              name="newPassword"
              onChange={(e) => setField('newPassword', e.target.value)}
              placeholder="New Password"
            />
            <span className="showHide2" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FaEyeSlash style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
              ) : (
                <FaEye style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
              )}
            </span>
            <br />
            {/* <input
              className={`in11 ${message && 'error'}`}
              type={conshowPassword ? 'text' : 'password'}
              name="c_password"
              onChange={(e) => setField('c_password', e.target.value)}
              placeholder="Confirm Password"
            /> */}
            <span className="showHide2" onClick={contogglePasswordVisibility}>
              {conshowPassword ? (
                <FaEyeSlash style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
              ) : (
                <FaEye style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
              )}
            </span>
            <br />
            <small className="error__msg">{message}</small>
            <br />
            <button className="btn1">Submit</button>
          </form>
          <Link to="/login" className="a3 a1">
            Sign in with email and password
          </Link>
        </div>
        <About />
      </div>
    </div>
  );
};

export default NewPassword;
