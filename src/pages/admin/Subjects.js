import axios from "axios";
import { useEffect, useState } from "react";

const AdminSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const { data } = await axios.get("/subjects");
      setSubjects(data);
      console.log(subjects)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-center mt-4 pl-4 mb-8 text-[#001529] font-semibold">
        All Subjects
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className="">
            <tr>
              <th className="bg-[#021A31] radius-0 text-white"></th>
              <th className="bg-[#021A31] radius-0 text-white">Course Name</th>
              <th className="bg-[#021A31] radius-0 text-white">University name</th>
              <th className="bg-[#021A31] radius-0 text-white">intake</th>
              <th className="bg-[#021A31] radius-0 text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              subjects.map((allOrder, index, order) =>
                <></>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminSubjects;
