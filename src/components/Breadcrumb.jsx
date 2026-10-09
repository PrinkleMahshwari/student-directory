export default function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb crumb-dark mb-3" data-bs-theme="dark">
                <li className="breadcrumb-item">.breadcrumb</li>
                <li className="breadcrumb-item">breadcrumb-item</li>
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item">Students</li>
                <li className="breadcrumb-item active fw-bold" aria-current="page">Directory</li>
            </ol>
        </nav>
    );
}
