import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const Sub = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate();

    const [programLevel, setProgramLevel] = useState("");
    const [englishProficiency, setEnglishProficiency] = useState("");
    const [country, setCountry] = useState("");
    const [studyArea, setStudyArea] = useState("");

    const onSubmit = async(e) => {
        console.log(e)
        try {
            const subjectData = new FormData();
            subjectData.append("photo", e?.photo[0]);
            subjectData.append("logo", e?.logo[0]);
            subjectData.append("title", e?.title);
            subjectData.append("description", e?.description);
            subjectData.append("university", e?.university);
            subjectData.append("address", e?.address);
            subjectData.append("webUrl", e?.webUrl);
            subjectData.append("ranking", e?.ranking);
            subjectData.append("studyArea", studyArea);
            subjectData.append("englishProficiency", englishProficiency);
            subjectData.append("programLevel", programLevel);
            subjectData.append("yearlyTuitionFees", e?.yearlyTuitionFees);
            subjectData.append("intakes", e?.intakes);
            subjectData.append("duration", e?.duration);
            subjectData.append("campus", e?.campus);
            subjectData.append("subjectUrl", e?.subjectUrl);
            subjectData.append("applicationFees", e?.applicationFees);
            subjectData.append("standardizedTest", e?.standardizedTest);
            subjectData.append("entryRequirement", e?.entryRequirement);
            subjectData.append("remarks", e?.remarks);
            subjectData.append("languageScore", e?.languageScore);
            subjectData.append("country", country);
            subjectData.append("applicationDeadline", e?.applicationDeadline);

            const { data } = axios.post("/subject", subjectData);
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

    const porgramOptions = [
        {
            value: 'Foundation',
            label: 'Foundation',
        },
        {
            value: 'Under Graduate',
            label: 'Under Graduate',
        },
        {
            value: 'Post Graduate',
            label: 'Post Graduate',
        },
        {
            value: 'PHD',
            label: 'PHD',
        },
    ]

    const countryOptions = [
        {
            value: 'UK',
            label: 'UK',
        },
        {
            value: 'USA',
            label: 'USA',
        },
        {
            value: 'CANADA',
            label: 'CANADA',
        },
        {
            value: 'DENMARK',
            label: 'DENMARK',
        },
    ]

    const engOptions = [
        {
            value: 'IELTS',
            label: 'IELTS',
        },
        {
            value: 'OIETC',
            label: 'OIETC',
        },
        {
            value: 'TOEFL',
            label: 'TOEFL',
        },
        {
            value: 'GRE',
            label: 'GRE',
        },
        {
            value: 'GMAT',
            label: 'GMAT',
        },
        {
            value: 'SAT',
            label: 'SAT',
        },
        {
            value: 'PTE',
            label: 'PTE',
        }
    ]

    const studyOptions = [
        {
            value: 'law',
            label: 'law',
        },
        {
            value: 'arts',
            label: 'arts',
        },
        {
            value: 'business',
            label: 'business',
        },
        {
            value: 'marketing',
            label: 'marketing',
        },
        {
            value: 'health',
            label: 'health',
        },
        {
            value: 'engineering',
            label: 'engineering',
        },
        {
            value: 'physical science',
            label: 'physical science',
        },
        {
            value: 'applied science',
            label: 'applied science',
        },
        {
            value: 'humanities',
            label: 'humanities',
        },
    ]
    return (
        <div>
            <h2 className="text-xl pl-4 mb-8 text-[#001529] font-semibold">
                Add Subject
            </h2>
            <div className="card shadow-lg p-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Course Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Course name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('title', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Course Image</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('photo', { required: true })}
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Course Intake</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Course Intake"
                                className="input input-bordered w-full max-w-lg"
                                {...register('intakes', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Course Duration</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Course Duration"
                                className="input input-bordered w-full max-w-lg"
                                {...register('duration', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Program Level</span>
                            </label>
                            <Select
                                className="select select-bordered"
                                options={porgramOptions}
                                placeholder="Choose Program Level"
                                onChange={(value) => setProgramLevel(value)}
                                isClearable
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">English Proficiency</span>
                            </label>
                            <Select
                                className="select select-bordered"
                                options={engOptions}
                                placeholder="English Proficiency"
                                onChange={(value) => setEnglishProficiency(value)}
                                isClearable
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Language score</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Language score"
                                className="input input-bordered w-full max-w-lg"
                                {...register('languageScore')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">University Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="University Name"
                                className="input input-bordered w-full max-w-lg"
                                {...register('university', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Univerisity logo</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full max-w-lg"
                                {...register('logo')}
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Campus</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Campus"
                                className="input input-bordered w-full max-w-lg"
                                {...register('campus')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Country</span>
                            </label>
                            <Select
                                className="select select-bordered"
                                options={countryOptions}
                                placeholder="Country"
                                onChange={(value) => setCountry(value)}
                                isClearable
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Study areas</span>
                            </label>
                            <Select
                                className="select select-bordered"
                                options={studyOptions}
                                placeholder="Study areas"
                                onChange={(value) => setStudyArea(value)}
                                isClearable
                            />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Yearly Tuition Fees</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Yearly Tuition Fees"
                                className="input input-bordered w-full max-w-lg"
                                {...register('yearlyTuitionFees', { required: true })} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">University ranking</span>
                            </label>
                            <input
                                type="text"
                                placeholder="University ranking"
                                className="input input-bordered w-full max-w-lg"
                                {...register('ranking')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Application Fees</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Application Fees"
                                className="input input-bordered w-full max-w-lg"
                                {...register('applicationFees')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Application deadline</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Application deadline"
                                className="input input-bordered w-full max-w-lg"
                                {...register('applicationDeadline')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Standarized tests</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Standarized tests"
                                className="input input-bordered w-full max-w-lg"
                                {...register('standardizedTest')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Entry Requirement</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Entry Requirement"
                                className="input input-bordered w-full max-w-lg"
                                {...register('entryRequirement')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Remarks</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Remarks"
                                className="input input-bordered w-full max-w-lg"
                                {...register('remarks')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-lg"
                                {...register('address')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Web URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Web URL"
                                className="input input-bordered w-full max-w-lg"
                                {...register('webUrl')} />
                        </div>
                        <div className="form-control w-full max-w-lg">
                            <label className="label">
                                <span className="label-text font-bold">Subject URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Subject URL"
                                className="input input-bordered w-full max-w-lg"
                                {...register('subjectUrl')} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Course Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-36 w-full"
                                placeholder="Course Description"
                                {...register('description')}></textarea>
                        </div>
                    </div>

                    <button
                        className="btn btn-primary text-white mt-2"
                        style={{ padding: '.5rem 2rem .5rem 2rem' }}
                        type="submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sub;
