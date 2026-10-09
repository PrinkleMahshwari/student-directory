export default function AppPagination() {
  return (
    <nav aria-label="Student directory pages" className="my-2">
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item disabled"><a className="page-link text-secondary" href="#">Previous</a></li>
        <li className="page-item active"><a className="page-link text-white bg-primary border-primary" href="#">1</a></li>
        <li className="page-item"><a className="page-link text-primary" href="#">2</a></li>
        <li className="page-item"><a className="page-link text-primary" href="#">3</a></li>
        <li className="page-item"><a className="page-link text-primary" href="#">Next</a></li>
      </ul>
    </nav>
  );
}
