const students = [
    { id: 101, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, email: "jane101@gamil.com", phone: "123-456-7890" },
    { id: 102, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 4.0, email: "mary102@gamil.com", phone: "123-456-7891" },
    { id: 103, name: "Gant Doe", major: "Computer Science", year: 2, gpa: 3.2, email: "gant103@gamil.com", phone: "123-456-7892" },
    { id: 104, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 1.1, email: "amm104@gamil.com", phone: "123-456-7893" },
];

export default function Students() {
    return (
        <div className="min-vh-100 d-flex flex-column bg-white">
            <div className="container my-3 flex-grow-1" style={{ maxWidth: "1064px" }}>

                <h1 className="text-center display-4 mb-4">Students</h1>

                <div className="row">
                    {students.map((s) => (
                        <div className="col-md-6 mb-4" key={s.id}>
                            <div className="card hover-lift h-100 shadow-sm p-3">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{s.name}</h5>
                                    <hr />
                                    <p className="card-text mb-1"><strong>Major:</strong> {s.major}</p>
                                    <p className="card-text mb-1"><strong>Year:</strong> {s.year}</p>
                                    <p className="card-text mb-0"><strong>GPA:</strong> {s.gpa}</p>
                                    <p className="card-text mb-0"><strong>Email:</strong> {s.email}</p>
                                    <p className="card-text mb-0"><strong>Phone:</strong> {s.phone}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}