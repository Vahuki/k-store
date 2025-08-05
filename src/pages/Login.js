import Layout from "../components/Layout";
import "../styles/Login.css";

export default function Login() {
  return (
    <Layout>
      <div className="login-wrapper">
        <div className="login-box">
          <h2 className="login-title">Chào mừng trở lại ✨</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nhập tên đăng nhập"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            <button type="submit" className="btn-login">
              Đăng nhập
            </button>
            <div className="login-links">
              <a href="#">Quên mật khẩu?</a>
              <a href="#">Đăng ký tài khoản</a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
