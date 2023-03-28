import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const Sub = () => {
    const {
        register,
        handleSubmit
    } = useForm()
    const navigate = useNavigate();

    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");

    const onSubmit = async (e) => {
        console.log(e)
        try {
            const studentData = new FormData();
            studentData.append("photo", e?.photo[0]);
            studentData.append("logo", e?.logo[0]);
            studentData.append("title", e?.title);
            studentData.append("description", e?.description);
            studentData.append("university", e?.university);
            studentData.append("address", e?.address);
            studentData.append("webUrl", e?.webUrl);
            studentData.append("ranking", e?.ranking);
            studentData.append("englishProficiency", gender);
            studentData.append("yearlyTuitionFees", e?.yearlyTuitionFees);
            studentData.append("intakes", e?.intakes);
            studentData.append("duration", e?.duration);
            studentData.append("campus", e?.campus);
            studentData.append("subjectUrl", e?.subjectUrl);
            studentData.append("applicationFees", e?.applicationFees);
            studentData.append("standardizedTest", e?.standardizedTest);
            studentData.append("entryRequirement", e?.entryRequirement);
            studentData.append("remarks", e?.remarks);
            studentData.append("languageScore", e?.languageScore);
            studentData.append("applicationDeadline", e?.applicationDeadline);
            studentData.append("marriedStatus", maritalStatus);

            const { data } = axios.post("/subject", studentData);
            // console.log("testing data=====>",data)
            if (data?.error) {
                toast.error(data.error);
            } else {
                toast.success(`"${data.title}" is created`);
                navigate("/dashboard/admin/subjects");
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <h2 className="text-xl pl-4 mb-8 text-[#001529] font-semibold">
                Add Student
            </h2>
            <div className="card shadow-lg p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Student Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Student name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('name', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Student Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Student name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('name', { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Student Birthday</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Student Birthday"
                                className="input input-bordered w-full max-w-lg"
                                {...register('birthday', { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Student Phone Number</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="input input-bordered w-full max-w-lg"
                                {...register("Phone", { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Gender</span>
                            </label>
                            <Select
                                className="select select-bordered"
                                options={[
                                    { value: "Male", label: "Male" },
                                    { value: "Female", label: "Female" },
                                    { value: "Other", label: "Other" }]}
                                placeholder="Gender"
                                onChange={(value) => setGender(value)}
                                isClearable
                            />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Marital Status</span>
                            </label>
                            <Select
                                className="select select-bordered"
                                options={[
                                    { value: "Single", label: "Single" },
                                    { value: "Married", label: "Married" },
                                    { value: "Other", label: "Other" }]}
                                placeholder="Marital Status"
                                onChange={(value) => setMaritalStatus(value)}
                                isClearable
                            />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-lg"
                                {...register('Address', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Emergency Contact Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Student name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('name', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Emergency Contact Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Student name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('name', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Emergency Contact Phone</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Student name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('name', { required: true })} />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Student Image</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('student_image', { required: true })}
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">SSC</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('SSC', { required: true })}
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">HSC</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('HSC', { required: true })}
                            />
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">University Degree</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('university', { required: true })}
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Diploma</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('degree', { required: true })}
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">English Certificate</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('eng_certificate', { required: true })}
                            />
                        </div>


                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Resume</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('Resume', { required: true })}
                            />
                        </div>



                    </div>

                    <button
                        className="btn btn-primary text-white mt-2 btn-block"
                        style={{ padding: '.5rem 2rem .5rem 2rem' }}
                        type="submit"
                    >
                        Create Student
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sub;
