import { useParams } from "react-router-dom";
import { employees, tasks } from "../data/data";

function EmployeeDetails() {

  const { id } = useParams();

  const employee = employees.find(
    employee => employee.id === Number(id)
  );

  const employeeTasks = tasks.filter(
    task => task.employeeId === Number(id)
  );

  if (!employee) {
    return <h3>Employee not found</h3>;
  }

  return (
    <div>

      <div className="card shadow-sm mb-4">

        <div className="card-body">

          <h2>{employee.name}</h2>

          <p>
            <strong>Role:</strong> {employee.role}
          </p>

          <p>
            <strong>Department:</strong> {employee.department}
          </p>

          <p>
            <strong>Email:</strong> {employee.email}
          </p>

          <p>
            <strong>Location:</strong> {employee.location}
          </p>

        </div>

      </div>

      <h4>
        Assigned Tasks
      </h4>

      {employeeTasks.map(task => (

        <div
          className="card shadow-sm mt-3"
          key={task.id}
        >

          <div className="card-body">

            <h5>{task.title}</h5>

            <p>
              Priority:
              <span className="badge bg-secondary ms-2">
                {task.priority}
              </span>
            </p>

            <p>
              Status:
              <span className="badge bg-primary ms-2">
                {task.status}
              </span>
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default EmployeeDetails;