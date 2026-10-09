function Avatar() {
  return (
    <div className="avatar-box">
      <svg width="220" height="102" viewBox="0 0 220 102" fill="#8c8c91" aria-hidden="true">
        <circle cx="110" cy="45" r="30" />
        <path d="M67 102 C67 84 85 76 110 76 C135 76 153 84 153 102 Z" />
      </svg>
    </div>
  );
}

export default function StudentCard({ id, name, major, year, gpa, tag }) {
  return (
    <div className="card student-card border-0 shadow">
      <Avatar />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text mb-3">
          ID: {id}<br />
          Major: {major}<br />
          Year: {year}<br />
          GPA: {gpa}
        </p>
        <button className="btn btn-outline-primary btn-sm me-2 mb-2">View Profile</button>
        <button className="btn btn-outline-danger btn-sm mb-2">Delete</button>
        <button className="btn btn-outline-danger btn-sm">{tag}</button>
      </div>
    </div>
  );
}