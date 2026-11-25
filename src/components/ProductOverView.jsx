import { useState } from 'react';

export default function ProductOverview({ title, price, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card h-100 overflow-hidden ${
        hovered ? 'shadow-lg border-primary' : 'shadow-sm border-light-subtle'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`position-relative p-4 ${hovered ? 'bg-primary-subtle' : 'bg-light'}`}>
        <img
          src={image}
          className={`card-img-top object-fit-contain ${hovered ? 'p-0' : 'p-2'}`}
          alt={title}
          style={{ height: '280px' }}
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h5 className={`card-title fw-bold mb-0 ${hovered ? 'text-primary' : ''}`}>
            {title}
          </h5>
          <span className="fs-5 fw-bold text-primary text-nowrap">${price}</span>
        </div>
      </div>
    </div>
  );
}
