import Layout from '../components/Layout';
import '../styles/Home.css';
import '../styles/App.css';

import { useEffect, useState } from 'react';
import { getShoes } from '../services/getShoes';
import { getBags } from '../services/getBags';
import { NavLink } from 'react-router-dom';

// Component con để tái sử dụng
const ProductList = ({ items }) => {
  const priceStyle = {
    color: '#d9534f',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  };

  return (
    <div className="container">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <NavLink to={`/product/${item.id}`} className="product-link">
            <img src={item.img} alt={item.name} className="product-img" />
            <h4>{item.name}</h4>
            <p><strong style={priceStyle}>{item.price.toLocaleString()} đ</strong></p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [shoes, setShoes] = useState([]);
  const [bags, setBags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataShoes = await getShoes();
        const dataBags = await getBags();
        setShoes(dataShoes);
        setBags(dataBags);
      } catch (error) {
        console.error("Lỗi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Đang tải dữ liệu...</p>;

  const btnDetail = {
    display: 'block',
    width: 'fit-content',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: '#dadadaff',
    color: '#000',
    textDecoration: 'none',
    borderRadius: '50px',
    textAlign: 'center',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  };

  return (
    <Layout>
      <div className="banner">
        <img src="/img/banner-bag.webp" alt="banner bag" className="d-block w-100 h-80" />
      </div>
      <ProductList items={bags} />
      <NavLink to="/bags" style={btnDetail}>See More</NavLink>
      <div className="banner">
        <img src="/img/banner-shoes.webp" alt="banner shoes" className="d-block w-100 h-80" />
      </div>
      <ProductList items={shoes} />
      <NavLink to="/shoes" style={btnDetail}>See More</NavLink>
    </Layout>
  );
};

export default Home;
