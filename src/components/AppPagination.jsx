export default function AppPagination() {
  return (
    <nav aria-label="Student pages" className="mt-3 mb-3">
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  );
}