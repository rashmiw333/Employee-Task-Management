import { useState } from "react";
import { employees, tasks } from "../data/data";
import EmployeeCard from "../components/EmployeeCard";

function Employees() {

  const [search, setSearch] = useState("");

  const [department, setDepartment] = useState("All");

  const filteredEmployees = employees.filter((employee) => {

    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <div>

      <h2 className="mb-4">
        Employees
      </h2>

      <div className="row mb-4">

        <div className="col-md-6">

          <input
            type="text"
            className="form-control"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="col-md-4">

          <select
            className="form-select"
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          >

            <option value="All">All Departments</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Design">Design</option>

          </select>

        </div>

      </div>

      <div className="row">

        {filteredEmployees.map((employee) => {

          const taskCount = tasks.filter(
            (task) => task.employeeId === employee.id
          ).length;

          return (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              taskCount={taskCount}
            />
          );
        })}

      </div>

    </div>
  );
}

export default Employees;