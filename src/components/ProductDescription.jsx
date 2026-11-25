import { useState } from 'react';

export default function ProductDescription({
  description,
  stock,
  category,
  brand,
  weight,
  width,
  height,
  depth,
  tags,
  warranty,
  shipping,
  availbilityStatus,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card h-100 overflow-hidden ${
        hovered ? 'shadow-lg border-primary' : 'shadow-sm border-light-subtle'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          {/* Header with Category & Availability Badges */}
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 border-bottom pb-2 mb-3">
            <h5 className={`fw-bold mb-0 ${hovered ? 'text-primary' : ''}`}>
              Product Description
            </h5>
            <div className="d-flex gap-2">
              {category && (
                <span className="badge bg-primary-subtle text-primary text-capitalize">
                  {category}
                </span>
              )}
              {availbilityStatus && (
                <span className="badge bg-success-subtle text-success border border-success-subtle">
                  {availbilityStatus}
                </span>
              )}
            </div>
          </div>

          {/* Description Text */}
          <p className="text-muted mb-4">{description}</p>

          {/* Specifications Grid */}
          <div className="row row-cols-1 row-cols-sm-2 g-2 small">
            <div className="col">
              <div className="p-2 rounded bg-light">
                <span className="text-muted">Brand:</span>{' '}
                <strong className="text-dark">{brand || 'N/A'}</strong>
              </div>
            </div>
            <div className="col">
              <div className="p-2 rounded bg-light">
                <span className="text-muted">Stock:</span>{' '}
                <strong className="text-dark">{stock} units</strong>
              </div>
            </div>
            <div className="col">
              <div className="p-2 rounded bg-light">
                <span className="text-muted">Weight:</span>{' '}
                <strong className="text-dark">{weight}g</strong>
              </div>
            </div>
            <div className="col">
              <div className="p-2 rounded bg-light">
                <span className="text-muted">Dimensions:</span>{' '}
                <strong className="text-dark">
                  {width} × {height} × {depth}
                </strong>
              </div>
            </div>
            <div className="col">
              <div className="p-2 rounded bg-light">
                <span className="text-muted">Warranty:</span>{' '}
                <strong className="text-dark">{warranty}</strong>
              </div>
            </div>
            <div className="col">
              <div className="p-2 rounded bg-light">
                <span className="text-muted">Shipping:</span>{' '}
                <strong className="text-dark">{shipping}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Tags Footer */}
        {tags && tags.length > 0 && (
          <div className="d-flex flex-wrap align-items-center gap-1 pt-3 mt-3 border-top">
            <span className="text-muted small me-1">Tags:</span>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="badge bg-secondary-subtle text-secondary-emphasis fw-normal"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
