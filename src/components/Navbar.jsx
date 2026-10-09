export default function Navbar() {
  const links = ["Dashboard", "Students", "Courses", "Reports"];
  return (
    <nav className="navbar navbar-expand bg-body-tertiary" style={{ overflow: "hidden" }}>
      <div className="container d-flex align-items-center flex-nowrap">
        <a className="navbar-brand me-3 flex-shrink-0" href="#">StudentPortal</a>

        <div 
          className="me-auto" 
          style={{ 
            overflowX: "auto", 
            whiteSpace: "nowrap",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>
          
          <ul className="navbar-nav flex-row flex-nowrap">
            {links.map((l) => (
              <li className="nav-item" key={l}>
                <a className="nav-link px-2" href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="navbar-nav flex-row flex-nowrap me-2 flex-shrink-0">
          <li className="nav-item">
            <a className="nav-link dropdown-toggle" href="#">Settings</a>
          </li>
        </ul>

        <form className="d-flex flex-shrink-0" role="search">
          <div className="search-box me-2 position-relative d-none d-sm-block">
            <input className="form-control" type="search" placeholder="Search" style={{ width: "140px" }} />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              fill="currentColor" 
              viewBox="0 0 16 16"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "#6c757d"
              }}
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>
          <button className="btn btn-primary" type="button">Search</button>
        </form>
      </div>
    </nav>
  );
}
