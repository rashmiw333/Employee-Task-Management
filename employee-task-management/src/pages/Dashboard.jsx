import { employees, tasks } from "../data/data";

function Dashboard() {

  const pending = tasks.filter(
    task => task.status === "Pending"
  );

  const completed = tasks.filter(
    task => task.status === "Completed"
  );

  const inProgress = tasks.filter(
    task => task.status === "In Progress"
  );

  return (
    <div>

      <h2 className="mb-4">
        Dashboard
      </h2>

      <div className="row">

        <div className="col-md-3">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6>Total Employees</h6>
              <h2>{employees.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6>Total Tasks</h6>
              <h2>{tasks.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6>Pending</h6>
              <h2>{pending.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <h6>Completed</h6>
              <h2>{completed.length}</h2>
            </div>
          </div>
        </div>

      </div>

      <div className="card shadow-sm mt-3">

        <div className="card-body">

          <h5>Task Summary</h5>

          <p>Pending: {pending.length}</p>

          <p>In Progress: {inProgress.length}</p>

          <p>Completed: {completed.length}</p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;