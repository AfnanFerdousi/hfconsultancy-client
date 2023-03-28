import { NavLink, Outlet } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div>
      <div className="bg-[#021a31] text-white h-[100%]">
        {/* <div className="p-3 mb-2 h4 bg-light">Admin Links</div> */}

        <ul className="list-group list-unstyled mt-2">
          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/studyArea">
              Create Study Area
            </NavLink>
          </li>

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/subject">
              Create Subject
            </NavLink>
          </li>

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/subjects">
              Subjects
            </NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/universityView">
              University Details
            </NavLink>
          </li>

          <li>
            <NavLink className="list-group-item" to="/dashboard/admin/orders">
              Manage orders
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet/>
   </div>
  );
}

export default AdminMenu;
