export default function Auth() {
  return (
    <div className="auth">
      <div className="wrap_auth">
        <form className="form_auth">
          <span className="auth_title">Login</span>
          <input type="text" className="auth_username" placeholder="Username" required />
          <input type="password" className="auth_password" placeholder="Password" required />
          <div className="container_remember_forgot">
            <div className="container_checkbox">
              <input className="checkbox" id="checkbox" type="checkbox" />
              <label className="checkbox_label" htmlFor="checkbox">Remember me</label>
            </div>
            <div className="auth_forgot">
              <a className="forgot" href="#">
                Forgot?
              </a>
            </div>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
