import "./App.css";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import StudentCard from "./components/StudentCard";
import AppPagination from "./components/AppPagination";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

const students = [
  { id: 101, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-primary" },
  { id: 102, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-danger" },
  { id: 103, name: "Gant Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-danger" },
  { id: 104, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 3.8, tag: ".btn-outline-danger" },
];

export default function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Breadcrumb />

        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
          <h1 className="h2 m-0">Page Header</h1>
          <button className="btn btn-navy">Add New Student</button>
        </div>

        <div
          className="row justify-content-center"
          style={{ "--bs-gutter-x": "1.25rem", "--bs-gutter-y": "1.25rem" }}
        >
          {students.map((s) => (
            <div className="col-auto" key={s.id}>
              <StudentCard {...s} />
            </div>
          ))}
        </div>

        <AppPagination />
        <Alert message="Student records have been successfully updated." />
      </div>

      <Footer />
    </>
  );
}