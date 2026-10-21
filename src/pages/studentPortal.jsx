import '../App.css'
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import StudentCard from "../components/StudentCard";
import AppPagination from "../components/AppPagination";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

const students = [
  { id: 101, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-primary", email: "jane101@gamil.com", phone: "123-456-7890" },
  { id: 102, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-danger", email: "mary102@gamil.com", phone: "123-456-7891" },
  { id: 103, name: "Gant Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-danger", email: "gant103@gamil.com", phone: "123-456-7892" },
  { id: 104, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-danger", email: "amm104@gamil.com", phone: "123-456-7893" },
];


export default function Students () {

    return (
        <div className="min-vh-100 d-flex flex-column bg-white">
        
              
        
              <div className="container my-3 flex-grow-1" style={{ maxWidth: "1064px" }}>
                <Breadcrumb />
        
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h1 className="fs-2 text-dark m-0 fw-normal">Page Header</h1>
                  <button className="btn btn-navy-flat px-3 py-2 rounded-1">
                    Add New Student
                  </button>
                </div>
        
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center mb-4">
                  {students.map((s) => (
                    <div className="col d-flex justify-content-center" key={s.id}>
                      <StudentCard {...s} />
                    </div>
                  ))}
                </div>
        
                <div className="d-flex justify-content-center mb-4">
                  <AppPagination />
                </div>
        
                <Alert message="Student records have been successfully updated." />
              </div>
        
            </div>
    )
}