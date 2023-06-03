import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

function Login() {
  const initialvalues = { email: "", password: "" };
  const [setLogin, setLoginData] = useState(initialvalues);
  const [setError, setErrorData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target);
    setLoginData({
      ...setLogin,
      [e.target.name]: e.target.value,
    });
    console.log(setLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorData(validate(setLogin));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(setError).length === 0 && isSubmit) {
    }
  }, [setError]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!regex.test(values.password < 4)) {
      errors.password =
        "password  must be more than 4 characters and should include characters";
    } else if (!regex.test(values.password > 10)) {
      errors.password = "password  must  not be more than 10 characters";
    }
    return errors;
  };

  const render = () => {
    if (isSubmit) {
      navigate("/home");
    }
  };

  return (
    <div
      className="container border mt-3 shadow"
      style={{ backgroundColor: "" }}
    >
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: "", textAlign: "center" }}>Login Page</h1>
        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required="true"
            className="form-control"
            onChange={handleChange}
            value={setLogin.email}
          />
          <p style={{ color: "red" }}>{setError.email}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="#" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required="true"
            minLength="5"
            className="form-control"
            onChange={handleChange}
            value={setLogin.password}
          />
          <p style={{ color: "red" }}>{setError.password}</p>
        </div>
        <Box textAlign="center">
          <div>
            <button
              type="submit"
              className="fluid btn btn-primary mb-2"
              onClick={render}
            >
              Log In
            </button>
          </div>

          <div>
          <h4> Forgot password?</h4>
            {/* <Link to="./signup">
              <button
                type="submit"
                className="btn  mb-2"
                style={{ color: "blue" }}
              >
                Forgot Password?
              </button>
            </Link> */}
          </div>

          <div>
            <Link to="./signup">
              <button type="submit" className="btn btn-success mb-2">
                Create a New Account
              </button>
            </Link>
          </div>
        </Box>
      </form>
    </div>
  );
}

export default Login;
