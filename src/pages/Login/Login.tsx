import { Button } from "./props/button/Button";
import "./Login.css";
import { LoginInput } from "./props/input_login";
import { useEffect, useRef, useState } from "react";
import { useMousePointer } from "./props/mousePointer";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api-services/auth/login.api";

export const Login = () => {
  const navigate = useNavigate();

  // let handleClick = () => {
  //   setUsername("");
  //   setPassword("");
  //   if (username === validUsername && password === validPassword) {
  //     localStorage.setItem("isLoggedIn", "true");
  //     alert("Details submitted successsfullly");
  //     navigate("/employee");
  //   } else {
  //     alert("Not present");
  //   }
  // };

  const [login, { isLoading }] = useLoginMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("Valid");
  const [showPassword, setShowPassword] = useState(false);
  const [loginerror, setLoginError] = useState("");

  const usernameRef = useRef<HTMLInputElement>(null);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const mousePointer = useMousePointer();

  useEffect(() => {
    if (regex.test(username)) {
      setError("Valid");
    } else {
      setError("Invalid");
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

  // const onLogin = async () => {
  //   const response = await login({ email: username, password: password });

  //   if (response.data) {
  //     localStorage.setItem(
  //       "token",
  //       response.data ? response.data.accessToken : ""
  //     );
  //     localStorage.setItem("isLoggedIn", "true");
  //     navigate("/employee");
  //   } else {
  //     alert("Invalid Credentials");
  //   }
  // };
  const onLogin = async () => {
    login({ email: username, password: password })
      .unwrap()
      .then((response) => {
        setLoginError(""); // clear old error
        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/employee");
      })
      .catch((error) => {
        setLoginError(error?.data?.message || "Login failed");
      });
  };

  return (
    <div className="main">
      <div className="left-part">
        <img src="./src/assets/images/kv-login.jpeg" alt="login" />
      </div>
      <div className="right-part">
        <div className="login-box">
          <img src="./src/assets/images/kv-logo.png" alt="logo"></img>
          {/* <div>
            x: {mousePointer.x}, y: {mousePointer.y}
          </div> */}

          <div className="input-container">
            <LoginInput
              label="username"
              value={username}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
            />
            {username.length > 0 && (
              <span className="clear-text" onClick={() => setUsername("")}>
                Clear
              </span>
            )}
          </div>
          <div
            style={{
              color:
                username === ""
                  ? "white"
                  : errorMessage === "Valid"
                  ? "green"
                  : "red",
              paddingTop: "5px",
            }}
          >
            {errorMessage}
          </div>

          <LoginInput
            label="password"
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
            label={isLoading ? "Logging in..." : "Submit"}
            onClick={onLogin}
            disabled={isLoading}
          ></Button>
          {/* <div style={{ paddingTop: "50px" }} className="counter1">
            {"Username: " + username}
          </div>
          <div className="counter1">{"Password: " + password}</div> */}
          {loginerror && (
            <div
              style={{ color: "red", marginTop: "10px", textAlign: "center" }}
            >
              {loginerror}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
