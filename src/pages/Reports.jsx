const reports = [
    { id: 301, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, grade: "A", remarks: "Excellent Performance" },
    { id: 302, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 4.0, grade: "A+", remarks: "Outstanding Performance" },
    { id: 303, name: "Gant Doe", major: "Computer Science", year: 2, gpa: 3.2, grade: "A-", remarks: "Good Performance" },
    { id: 304, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 1.1, grade: "F", remarks: "Better Luck Next Time" },
]

export default function Reports() {

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center display-4 mb-4">Semester Examination Report</h1>

                <div className="row">
                    {reports.map((report) => (
                        <div key={report.id} className="col-md-6 mb-4">
                            <div className="card hover-lift h-100 shadow-sm p-3">
                                <div className="card-body">
                                    <h5 className="card-title text-primary">{report.name}</h5>
                                    <hr />
                                    <p className="card-text mb-1"><strong>Major:</strong> {report.major}</p>
                                    <p className="card-text mb-1"><strong>Year:</strong> {report.year}</p>
                                    <p className="card-text mb-0"><strong>GPA:</strong> {report.gpa}</p>
                                    <p className="card-text mb-0"><strong>Grade:</strong> {report.grade}</p>
                                    <p className="card-text mb-0"><strong>Remarks:</strong> {report.remarks}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}