export default function Alert({ message }) {
  return (
    <div className="alert alert-info-custom alert-dismissible" role="alert">
      {message}
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  );
}