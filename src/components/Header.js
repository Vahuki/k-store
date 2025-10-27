import { NavLink } from "react-router-dom"
import "../styles/Header.css"
export default function Header() {
    return (
        <header>
            <div className="header-container">
                <NavLink to="/" className="logo">
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} width="120" height="120" alt="logo" />
                </NavLink>
                <div className="content">
                    <div className="search">
                        <input type="text" id="search-input" placeholder="Tìm kiếm sản phẩm..." />
                    </div>
                    <NavLink to="/cart" className="cart" style={{ color: 'black' }}>
                        <i className="bi bi-cart"></i>
                    </NavLink>
                    <div className="user">
                        <i className="bi bi-person-circle"></i>
                        <NavLink to="/login" style={{ fontSize: '14px', paddingLeft: '3px', textDecoration: 'none', color: 'black' }}>Đăng nhập</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}