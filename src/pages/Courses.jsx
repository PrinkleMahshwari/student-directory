import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

const courses = [ 
  { id: 201, name: "Software Construction and Development", instructor: "Mustafa Hussan", credits: 2, schedule: "SAT 8:30 AM - 10:30 AM" }, 
  { id: 202, name: "Lab: Software Construction and Development", instructor: "Bisma Sahr", credits: 1, schedule: "MON 7:00 PM - 9:30 PM" },
  { id: 203, name: "Computer Networks", instructor: "Dr. Shehzad Haroon", credits: 2, schedule: "Wed 11:00 AM - 1:00 PM" },
  { id: 204, name: "Lab: Compuer Networks", instructor: "Mr. Hamad Ali Tejani", credits: 1, schedule: "MON 4:15 PM - 6:45 PM" },
  { id: 205, name: "Technical and Business Writing", instructor: "Ms. Nida Shabbir", credits: 3, schedule: "WED 1:30 PM - 4:0 PM" },
  { id: 206, name: "Entreprenuership", instructor: "Adeel Karim", credits: 2, schedule: "THU 8:00 AM - 10:00 AM" },
  { id: 207, name: "Professional Practices", instructor: "Naveed Ghani", credits: 3, schedule: "THU 10:15 AM - 12:15 PM" },
];

export default function Courses() { 
  return ( 
    <>
      <div className="container mt-5"> 
        <h1 className="text-center display-4 mb-4">Courses</h1> 
        <div className="row"> 
          {courses.map((course) => ( 
            <div key={course.id} className="col-md-6 mb-4"> 
              <div className="card hover-lift h-100 shadow-sm p-3"> 
                <div className="card-body"> 
                  <h5 className="card-title text-primary">{course.name}</h5> 
                  <hr />
                  <p className="card-text mb-1"><strong>Instructor:</strong> {course.instructor}</p> 
                  <p className="card-text mb-1"><strong>Credits:</strong> {course.credits}</p> 
                  <p className="card-text mb-0"><strong>Schedule:</strong> {course.schedule}</p> 
                </div> 
              </div> 
            </div> 
          ))} 
        </div> 
      </div> 
    </>
  );
}
