import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  // context

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto active:text-[#333] text-white w-64 bg-[#021a31] gap-y-2">
          {/* <!-- Sidebar content here --> */}

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/
            addStudent">
              Add Student
            </NavLink>
          </li>

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/subject">
              Create Subject
            </NavLink>
          </li>

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/subjects">
              All Subjects
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/students">
              All Subjects
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default AdminDashboard;
