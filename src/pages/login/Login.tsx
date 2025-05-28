import { Button } from "./props/button/Button";
import "./Login.css";
import { LoginInput } from "./props/input_login";
import { useEffect, useRef, useState } from "react";
import { useMousePointer } from "./props/mousePointer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  let validUsername = "erwinjose@gmail.com";
  let validPassword = "password";

  const navigate = useNavigate();

  let handleClick = () => {
    setUsername("");
    setPassword("");
    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Details submitted successsfullly");
      navigate("/employee");
    } else {
      alert("Not present");
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("Valid");
  const [showPassword, setShowPassword] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const mousePointer = useMousePointer();

  useEffect(() => {
    if (username.length > 10) {
      setError("Valid");
    } else {
      setError("InValid");
    }
  }),
    [username];

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (
    <div className="main">
      <div className="left-part">
        <img src="./src/assets/images/kv-login.jpeg" alt="login" />
      </div>
      <div className="right-part">
        <div className="login-box">
          <img src="./src/assets/images/kv-logo.png" alt="logo"></img>
          <div>
            x: {mousePointer.x}, y: {mousePointer.y}
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
          >
            <LoginInput
              name="username"
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
            />
            <button
              className="clear_button"
              onClick={() => setUsername("")}
              disabled={username.length === 0}
            >
              Clear
            </button>
          </div>
          <div
            style={{
              color: errorMessage === "Valid" ? "green" : "red",
              paddingTop: "5px",
              paddingBottom: "20px",
            }}
          >
            {errorMessage}
          </div>

          <LoginInput
            name="password"
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="showPassword">
            <input type="checkbox" onClick={handleShowPassword}></input>
            <label>Show Password</label>
          </div>
          <Button
            name="LoginButton"
            type="submit"
            label="Submit"
            onClick={handleClick}
          ></Button>
          <div style={{ paddingTop: "50px" }} className="counter1">
            {"Username: " + username}
          </div>
          <div className="counter1">{"Password: " + password}</div>
        </div>
      </div>
    </div>
  );
};
