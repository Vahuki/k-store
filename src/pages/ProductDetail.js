import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShoes } from '../services/getShoes';
import { getBags } from '../services/getBags';
import Layout from '../components/Layout';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const shoes = await getShoes();
            const bags = await getBags();
            const allProducts = [...shoes, ...bags];
            const found = allProducts.find((item) => item.id.toString() === id);
            setProduct(found);
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p style={{ padding: "20px" }}>Đang tải sản phẩm...</p>;
    }

    return (
        <Layout>
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px' }}>
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    <img
                        src={`${process.env.PUBLIC_URL}${product.img}`}
                        alt={product.name}
                        style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
                    />

                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{product.name}</h2>
                        <p style={{ fontSize: '1.2rem', color: '#555' }}>{product.description}</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px' }}>
                            Giá: {product.price.toLocaleString()} đ
                        </p>
                        <button style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            fontSize: '1rem',
                            backgroundColor: '#000',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer'
                        }}>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetail;
