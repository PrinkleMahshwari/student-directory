export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3 mt-auto w-100">
      <div className="container" style={{ maxWidth: "1064px" }}>
        <div className="row px-2">
          <div className="col-6">
            <h5 className="fs-6 fw-bold text-white mb-2">Links</h5>
            <ul className="list-unstyled mb-0">
              {["Home", "Computer Science", "Courses", "Reports"].map((l) => (
                <li key={l} className="mb-1">
                  <a href="#" className="text-white text-decoration-none small" style={{ opacity: 0.85 }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6">
            <h5 className="fs-6 fw-bold text-white mb-2">Contact Info</h5>
            <ul className="list-unstyled mb-0 small" style={{ opacity: 0.85 }}>
              <li className="mb-1 text-white">Contact Us</li>
              <li className="mb-1">+1: 123 456 7890</li>
              <li>trm@studentportal.com</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />
        <p className="text-center small mb-0" style={{ opacity: 0.65 }}>© 2024 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}
