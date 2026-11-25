import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductOverview from '../components/ProductOverView';
import ProductDescription from '../components/ProductDescription';
import Reviews from '../components/Reviews';
import { getProductById } from '../services/ProductService';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container-fluid px-4 my-4">
      {/* Page Header Matching Products.jsx */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 border-bottom pb-2 mb-4">
        <div>
          <h2 className="fw-bold mb-0">Product Details</h2>
          <p className="text-muted small mb-0">
            {product ? product.title : 'View complete product specifications and reviews'}
          </p>
        </div>
        <Link to="/" className="btn btn-outline-primary btn-sm px-3">
          &larr; Back to Products
        </Link>
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

      {!loading && !error && product && (
        <>
          {/* Product Overview & Description Row */}
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <ProductOverview
                title={product.title}
                price={product.price}
                discountPercentage={product.discountPercentage}
                rating={product.rating}
                image={product.images?.[0]}
              />
            </div>

            <div className="col-12 col-lg-8">
              <ProductDescription
                description={product.description}
                tags={product.tags}
                category={product.category}
                brand={product.brand}
                weight={product.weight}
                width={product.dimensions?.width}
                height={product.dimensions?.height}
                depth={product.dimensions?.depth}
                stock={product.stock}
                warranty={product.warrantyInformation}
                shipping={product.shippingInformation}
                availbilityStatus={product.availabilityStatus}
              />
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-5">
            <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
              <h4 className="fw-bold mb-0">Customer Reviews</h4>
              <span className="badge bg-primary-subtle text-primary fs-6">
                {product.reviews?.length || 0} Reviews
              </span>
            </div>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="row row-cols-1 row-cols-md-3 g-3">
                {product.reviews.map((review, index) => (
                  <div className="col" key={index}>
                    <Reviews
                      rating={review.rating}
                      comment={review.comment}
                      reviewerName={review.reviewerName}
                      reviewDate={new Date(review.date).toLocaleDateString()}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">No reviews available.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
