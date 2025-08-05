import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { getShoes } from '../services/getShoes';
const Shoes = () => {
    const [shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataShoes = await getShoes();
                setShoes(dataShoes);
            } catch (error) {
                console.error("Lỗi:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (!loading) return <p>Đang tải dữ liệu...</p>;
    const price = {
        color: '#d9534f',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    };
    const container = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
    };
    const listshoes = {
        padding: '20px 80px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    if (shoes.length === 0) return <p>Không có sản phẩm nào</p>;
    return (
        <Layout>
                    <div className="banner">
                        <img src="/img/banner-shoes.webp" alt="banner shoes" className="d-block w-100 h-80" />
                    </div>
                    <div style={listshoes}>
                        <div style={container}>
                            {shoes.map((item) => (
                                <div key={item.id} className="product-card" >
                                    <img src={item.img} alt={item.name} className="product-img" />
                                    <h4>{item.name}</h4>
                                    <p><strong style={price}>{item.price.toLocaleString()} đ</strong></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Layout>
    );
}
export default Shoes;