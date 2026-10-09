export default function Navbar() {
  const links = ["Dashboard", "Students", "Courses", "Reports"];
  
  return (
    <nav className="navbar navbar-expand bg-body-tertiary border-bottom py-2">
      <style>{`
        .nav-scroller::-webkit-scrollbar { display: none; }
        .nav-scroller { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container d-flex align-items-center flex-nowrap overflow-hidden" style={{ maxWidth: "1064px" }}>
        <a className="navbar-brand me-3 fw-normal text-dark flex-shrink-0" href="#">StudentPortal</a>

        <div className="me-auto overflow-auto nav-scroller flex-grow-1">
          <ul className="navbar-nav flex-row flex-nowrap">
            {links.map((l) => (
              <li className="nav-item" key={l}>
                <a className="nav-link px-2 text-secondary" href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="navbar-nav flex-row flex-nowrap mx-2 flex-shrink-0">
          <li className="nav-item">
            <a className="nav-link dropdown-toggle text-secondary" href="#">Settings</a>
          </li>
        </ul>

        <form className="d-flex align-items-center flex-shrink-0" role="search">
          <div className="position-relative me-2 d-none d-sm-block" style={{ width: "185px" }}>
            <input className="form-control pe-4" type="search" placeholder="Search" aria-label="Search" />
            <svg 
              xmlns="http://w3.org" 
              width="16" 
              height="16" 
              fill="currentColor" 
              viewBox="0 0 16 16"
              className="position-absolute end-0 top-50 translate-middle-y me-2 text-secondary"
              style={{ pointerEvents: "none" }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <button className="btn btn-primary px-3" type="button">Search</button>
        </form>
      </div>
    </nav>
  );
}
