import axios from "axios";
import { useEffect, useState } from "react";

const AdminStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, [students]);

    const loadStudents = async () => {
        try {
            const { data } = await axios.get("/students");
            setStudents(data);
            console.log(students)
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2 className="text-xl text-center mt-4 pl-4 mb-8 text-[#001529] font-semibold">
                All Students
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full ">
                    <thead className="">
                        <tr>
                            <th className="bg-[#021A31] radius-0 text-white"></th>
                            <th className="bg-[#021A31] radius-0 text-white">Student name</th>
                            <th className="bg-[#021A31] radius-0 text-white">Email address</th>
                            <th className="bg-[#021A31] radius-0 text-white">Phone Number</th>
                            
                            <th className="bg-[#021A31] radius-0 text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((allOrder, index, order) =>
                                <></>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminStudents;
