import { useState } from "react";

export default function Dashboard() {
    const [students, setStudents] = useState([
        { id: 101, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, email: "jane101@gmail.com", phone: "123-456-7890" },
        { id: 102, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 3.8, email: "mary102@gmail.com", phone: "098-765-4321" },
        { id: 103, name: "Gant Doe", major: "Computer Science", year: 2, gpa: 3.8, email: "gant103@gmail.com", phone: "555-555-5555" },
        { id: 104, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 3.8, email: "amm104@gmail.com", phone: "666-666-6666" },
    ]);

    // Combined object state following Mam's style
    const [formData, setFormData] = useState({
        name: "",
        major: "",
        year: "",
        gpa: "",
        email: "",
        phone: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Universal dynamic handler from Mam's code
    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

        setError("");
        setSuccess("");
    }

    function handleAddStudent(event) {
        event.preventDefault();

        setError("");
        setSuccess("");

        // Name validation
        if (!formData.name) {
            setError("Please enter the student's name.");
            return;
        }

        if (formData.name.length < 3) {
            setError("Name must be at least 3 characters.");
            return;
        }

        // Major validation
        if (!formData.major) {
            setError("Please enter the student's major.");
            return;
        }

        // Dynamic Year Validation
        if (!formData.year) {
            setError("Please enter the student's year.");
            return;
        }

        // Ensure it follows a exact 4-digit yyyy format string length
        if (formData.year.toString().length !== 4) {
            setError("Year must be in the format yyyy (e.g., 2024).");
            return;
        }

        const parsedYear = parseInt(formData.year);
        const currentYear = new Date().getFullYear(); // Automatically gets 2026, 2027, etc.

        if (isNaN(parsedYear)) {
            setError("Year must be a valid number.");
            return;
        }

        if (parsedYear < 2000 || parsedYear > currentYear) {
            setError(`Year must be greater than or equal to  2000 and less than or equal to the current year (${currentYear}).`);
            return;
        }


        // GPA validation   
        const parsedGpa = parseFloat(formData.gpa);
        if (formData.gpa === "" || isNaN(parsedGpa)) {
            setError("Please enter the student's GPA.");
            return;
        }

        if (parsedGpa < 0 || parsedGpa > 4.0) {
            setError("GPA must be between 0.0 and 4.0.");
            return;
        }

        // Email validation
        if (!formData.email) {
            setError("Please enter an email address.");
            return;
        }

        if (!formData.email.includes("@") || !formData.email.includes(".")) {
            setError("Please enter a valid email containing '@' and '.'");
            return;
        }

        // phone number validation
        if (!formData.phone) {
            setError("Please enter a phone number.");
            return;
        }

        if (formData.phone.length < 10 || formData.phone.length > 20) {
            setError("Phone number must be between 10 and 20 digits long.");
            return;
        }

        if (isNaN(Number(formData.phone)) || Number(formData.phone) < 0) {
            setError("Phone number must contain whole numbers only.");
            return;
        }


        // Create a new unique ID sequentially
        const nextId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 101;

        const newStudent = {
            id: nextId,
            name: formData.name,
            major: formData.major,
            year: parseInt(formData.year),
            gpa: parsedGpa,
            email: formData.email,
            phone: formData.phone,
        };

        // Update students array
        setStudents([...students, newStudent]);

        // Successful actions
        console.log("Student added successfully:");
        console.log(newStudent);
        setSuccess("Student added to the database successfully!");

        // Clear form state completely
        setFormData({
            name: "",
            major: "",
            year: "",
            gpa: "",
            email: "",
            phone: "",
        });
    }

    function handleRemoveStudent(indexToRemove) {
        const updatedStudents = students.filter((_, index) => index !== indexToRemove);
        setStudents(updatedStudents);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-sm hover-lift">
                    <h1 className="text-center display-4 mb-4">Student Manager</h1>
                    <div className="card-body p-4">
                        <form onSubmit={handleAddStudent}>

                            {/* Student Name */}
                            <div className="mb-3">
                                <label className="form-label">Student Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter student name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Student Major */}
                            <div className="mb-3">
                                <label className="form-label">Student Major</label>
                                <input
                                    type="text"
                                    name="major"
                                    className="form-control"
                                    placeholder="Enter student major"
                                    value={formData.major}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Student Year */}
                            <div className="mb-3">
                                <label className="form-label">Student Year</label>
                                <input
                                    type="number"
                                    name="year"
                                    className="form-control"
                                    placeholder="Enter student year"
                                    value={formData.year}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Student GPA */}
                            <div className="mb-3">
                                <label className="form-label">Student GPA</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    name="gpa"
                                    className="form-control"
                                    placeholder="Enter student GPA"
                                    value={formData.gpa}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Student Email */}
                            <div className="mb-3">
                                <label className="form-label">Student Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter student email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Student Phone */}
                            <div className="mb-3">
                                <label className="form-label">Student Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter student phone (e.g., 123-456-7890)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Error Message Box */}
                            {error && <div className="alert alert-danger mb-3">{error}</div>}

                            {/* Success Message Box */}
                            {success && <div className="alert alert-success mb-3">{success}</div>}

                            <button type="submit" className="btn btn-navy-flat px-3 py-2 rounded-1">
                                Add Student
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
