import { Button } from "./props/button/Button";
import "./Login.css";
import { LoginInput } from "./props/input_login";
import { useEffect, useRef, useState } from "react";

export const Login = () => {
  const [counter, setCounter] = useState(0);
  let handleClick = () => {
    setCounter((prev) => prev + 1);
    console.log(counter);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState("Valid");

  const usernameRef = useRef<HTMLInputElement>(null);

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

  return (
    <div className="main">
      <div className="left-side">
        <img src="./src/assets/images/kv-login.jpeg" alt="login" />
      </div>
      <div className="right-part">
        <div className="login-box">
          <img src="./src/assets/images/kv-logo.png" alt="logo"></img>
          <LoginInput
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            ref={usernameRef}
          />
          <div
            style={{
              color: errorMessage === "Valid" ? "green" : "red",
              paddingTop: "5px",
            }}
          >
            {errorMessage}
          </div>
          <LoginInput
            name="password"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            name="LoginButton"
            type="submit"
            label="Submit"
            onClick={handleClick}
          ></Button>
          <div className="counter1">{"Username: " + username}</div>
          <div className="counter1">{"Password: " + password}</div>
        </div>
      </div>
    </div>
  );
};
