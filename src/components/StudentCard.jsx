function Avatar() {
  return (
    <div className="d-flex justify-content-center align-items-end w-100" style={{ background: "#c8c8d0", height: "102px" }}>
      <svg width="220" height="102" viewBox="0 0 220 102" fill="#8c8c91" aria-hidden="true" className="w-100 h-100">
        <circle cx="110" cy="45" r="30" />
        <path d="M67 102 C67 84 85 76 110 76 C135 76 153 84 153 102 Z" />
      </svg>
    </div>
  );
}

export default function StudentCard({ id, name, major, year, gpa, tag }) {
  const isPrimary = tag.includes("primary");

  return (
    <div className="card border student-card-item w-100" style={{ width: "220px", maxWidth: "220px" }}>
      <Avatar />
      <div className="card-body p-3">
        <h4 className="card-title fs-5 fw-bold text-dark mb-2">{name}</h4>
        <p className="card-text text-dark mb-3 lh-sm small">
          ID: {id}<br />
          Major: {major}<br />
          Year: {year}<br />
          GPA: {gpa}
        </p>
        
        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-outline-primary btn-sm flex-grow-1 py-1 text-nowrap">View Profile</button>
          <button className="btn btn-outline-danger btn-sm flex-grow-1 py-1 text-nowrap">Delete</button>
        </div>
        
        <button 
          className={`btn btn-sm w-100 py-1 font-monospace disabled text-center ${
            isPrimary ? 'btn-outline-primary' : 'btn-outline-danger'
          }`} 
          style={{ fontSize: '0.78rem' }}
        >
          {tag}
        </button>
      </div>
    </div>
  );
}