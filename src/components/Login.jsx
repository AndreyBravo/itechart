import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();
    navigate("/app")
  }

  return (
    <div className="auth">
      <div className="wrap_auth">
        <form className="form_auth">
          <span className="auth_title">Login</span>
          <input
            type="text"
            className="auth_username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            className="auth_password"
            placeholder="Password"
            required
          />
          <div className="container_remember_forgot">
            <div className="container_checkbox">
              <input className="checkbox" id="checkbox" type="checkbox" />
              <label className="checkbox_label" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <div className="auth_forgot">
              <a className="forgot" href="#">
                Forgot?
              </a>
            </div>
          </div>
          <input onClick={onSubmit} type="submit" value="Login" />
        </form>
        <div className="link_for_auth">
          <span>or</span>
          <Link to="singup">Sing Up</Link>
        </div>
      </div>
    </div>
  );
}
