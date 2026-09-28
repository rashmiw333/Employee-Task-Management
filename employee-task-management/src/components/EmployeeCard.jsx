import { Link } from "react-router-dom";

function EmployeeCard({ employee, taskCount }) {
  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow-sm h-100">

        <div className="card-body">

          <h5>{employee.name}</h5>

          <p className="mb-1">
            <strong>Role:</strong> {employee.role}
          </p>

          <p className="mb-1">
            <strong>Department:</strong> {employee.department}
          </p>

          <p>
            <strong>Tasks:</strong> {taskCount}
          </p>

          <Link
            to={`/employees/${employee.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EmployeeCard;