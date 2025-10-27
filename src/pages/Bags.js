import Layout from '../components/Layout';
import { getBags } from '../services/getBags';
import { useState, useEffect } from 'react';
const Bags = () => {
    const [bags, setBags] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBags = await getBags();
                setBags(dataBags);
            } catch (error) {
                console.error("loi:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
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
    const listbags = {
        padding: '20px 80px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    if (bags.length === 0) return <p>Không có sản phẩm nào</p>;
    return (

        <Layout>
            <div className="banner">
                <img
                    src={`${process.env.PUBLIC_URL}/img/banner-bag.webp`}
                    alt="banner bag"
                    className="d-block w-100 h-80"
                />

            </div>
            <div style={listbags}>
                <div style={container}>
                    {bags.map((item) => (
                        <div key={item.id} className="product-card" >
                            <img src={`${process.env.PUBLIC_URL}${item.img}`} alt={item.name} className="product-img" />
                            <h4>{item.name}</h4>
                            <p><strong style={price}>{item.price.toLocaleString()} đ</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};
export default Bags;