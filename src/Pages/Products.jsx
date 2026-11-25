import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/ProductService';

export default function Products() {
    // store products in state
    const [products, setProducts] = useState([]);
    
    // track API loading state
    const [loading, setLoading] = useState(true);

    // track API error state
    const [error, setError] = useState('');

    // run once on component mount to fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError('');
            try {
                const products = await getProducts();
                setProducts(products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    
    return (
        <div className="container-fluid px-4 my-3">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
                <div>
                <h2 className="fw-bold mb-0">Listed Products</h2>
                <p className="text-muted small mb-0">Browse our latest catalog and deals</p>
                </div>
                {!loading && !error && (
                <span className="badge bg-primary-subtle text-primary fs-6">
                    {products.length} Items
                </span>
                )}
            </div>

            {loading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {error && (
                <div className="alert alert-danger text-center my-5" role="alert">
                    {error}
                </div>
            )}
            
            {/* Display Products */}
            {products && !loading && !error && (
            <div className="container-fluid px-4 my-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
                {products.map((product) => (
                    <div className="col" key={product.id}>
                    <ProductCard
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                        thumbnail={product.thumbnail}
                    />
                    </div>
                ))}
                </div>
            </div>
            )}

        </div>
    )
}