export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className="mt-2">
      <ol className="breadcrumb px-3 py-2 rounded mb-4 align-items-center" style={{ backgroundColor: "#2b3035" }}>
        <li className="breadcrumb-item font-monospace small" style={{ color: "#dee2e6" }}>.breadcrumb</li>
        <li className="breadcrumb-item font-monospace small" style={{ color: "#dee2e6", paddingLeft: "4px" }}>/ breadcrumb-item</li>
        <li className="breadcrumb-item" style={{ paddingLeft: "12px" }}>
          <a href="#" className="text-white text-decoration-none small">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" className="text-white text-decoration-none small">Students</a>
        </li>
        <li className="breadcrumb-item active text-white fw-bold small" aria-current="page">Directory</li>
      </ol>
    </nav>
  );
}