import { useRef, useEffect } from "react";
import Button from "./Button";
import "./uncontrolled_Login.css";
import LoginInput from "./LoginInput";

const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  const handleSubmit = () => {};

  const handleClear = () => {
    if (!usernameRef.current) {
      return;
    }
    usernameRef.current.value = "";
    clearButtonRef.current!.style.display = "none";
  };

  const handleDisablingButton = (value: string) => {
    if (!clearButtonRef.current) return;
    if (value.length === 0) {
      clearButtonRef.current.style.display = "none";
    } else {
      clearButtonRef.current.style.display = "block";
    }
  };

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img
              src="./src/assets/images/kv-login.jpeg"
              alt="KV Login"
              className="login-image"
            />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img
            className="logo"
            src="./src/assets/images/kv-logo.png"
            alt="KV Logo"
          />
          <form onSubmit={handleSubmit}>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              endAdornment={
                <button
                  style={{ display: "none" }}
                  ref={clearButtonRef}
                  onClick={handleClear}
                >
                  Clear
                </button>
              }
              onChange={(e) => {
                handleDisablingButton(e.target.value);
              }}
            />

            <LoginInput id="login-password-input" label="Password" />

            <Button type="submit" className="login-button">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
