import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <h4>K-Store</h4>
          <p>&copy; 2025 K-Store. All rights reserved.</p>
          <p><i className="bi bi-geo-alt-fill"></i> 189 Trần Cao Vân, Q. Thanh Khê, Đà Nẵng</p>
        </div>

        <div className="footer-right">
          <h4>Liên hệ</h4>
          <p><i className="bi bi-telephone-fill"></i> 0822 124 082</p>
          <p><i className="bi bi-envelope-fill"></i> <a href="mailto:kienhuu975@gmail.com">kienhuu975@gmail.com</a></p>
          <div className="social-links">
            <a href="https://www.facebook.com/vahuki" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/_vahuki" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@vahvah_" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
