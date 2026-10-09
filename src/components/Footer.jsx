export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="footer-inner">
          <div className="row">
            <div className="col-6">
              <h5>Links</h5>
              <ul className="list-unstyled">
                {["Home", "Computer Science", "Courses", "Reports"].map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white text-decoration-none">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6">
              <h5>Contact Info</h5>
              <ul className="list-unstyled">
                <li>Contact Us</li>
                <li>+1: 123 456 7890</li>
                <li>trm@studentportal.com</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <p className="text-center mb-0">© 2024 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  );
}