import React from "react";
import { connect } from "react-redux";
import { loggingIn } from "../Service/login-service";

const LoginForm = ({ isOnProgress, dispatch }) => {
  let username;
  let password;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!(username.value.trim() && password.value.trim())) {
          return;
        }
        dispatch(loggingIn(username.value.trim(), password.value.trim()));
        password.value = "";
      }}
    >
      <label className="LOGO">Plan.G</label>
      <div className="loginbox">
        <div className="field">
          <label className="label">ID</label>
          <div className="control">
            <input
              className="input"
              type="username"
              name="username"
              ref={node => (username = node)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name="password"
              ref={node => (password = node)}
            />
          </div>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          {isOnProgress && (
            <button type="submit" className="button is-link is-loading">
              Login
            </button>
          )}
          {!isOnProgress && (
            <button type="submit" className="button is-link">
              Login
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  isOnProgress: state.login.isOnProgress
});

export default connect(mapStateToProps)(LoginForm);
