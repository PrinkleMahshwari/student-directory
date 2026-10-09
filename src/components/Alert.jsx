export default function Alert({ message }) {
  return (
    <div 
      className="alert alert-dismissible fade show border role-alert" 
      style={{ 
        backgroundColor: "#cfe5ec", 
        borderColor: "#bddbe4", 
        color: "#0c5460",
        margin: "0 10px 16px 10px"
      }} 
      role="alert"
    >
      <span className="small">{message}</span>
      <button type="button" className="btn-close small" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}
