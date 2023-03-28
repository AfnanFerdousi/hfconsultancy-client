import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
// import { Col, div } from "antd";

const SubjectCard = ({ s }) => {
    // context
  const [cart, setCart] = useCart();
  const {
    title,
    yearlyTuitionFees,
    intakes,
    duration,
    campus,
    applicationDeadline,
    applicationFees,
    englishProficiency,
    entryRequirement,
    languageScore,
    programLevel,
    remarks,
    standardizedTest,
    studyArea,
    subjectUrl,
    country
  } = s;

  const navigate = useNavigate();
  return (
    <div className="card mb-3 hoverable">
      <div className="card-body">
        <h5 className="fw-bold text-center">{title}</h5>
        <div className="row">
          <div span={24} className="grid grid-cols-4 justify-content-between">
            <p className="fw-bold">
              <span className="fw-bold">Yearly Tuition Fees:</span>{" "}
              {yearlyTuitionFees?.toLocaleString("en-US", {
                style: "currency",
                currency: "GBP",
                currencyDisplay: "code",
              })}
            </p>
            <p><span className="fw-bold">Program Level: </span> {programLevel}</p>
            <p>
              <span className="fw-bold">Intakes:</span> {intakes}
            </p>
            <p>
              <span className="fw-bold">Duration:</span> {duration}
            </p>
          </div>
        </div>
        <div className="row">
          <div span={24} className="grid grid-cols-4 justify-content-between">
          <p>
              <span className="fw-bold">English Proficiency:</span>
              {englishProficiency}             
            </p>
            <p>
              <span className="fw-bold">Application Deadline:</span>{" "}
              {applicationDeadline}
            </p>           
            <p>
              <span className="fw-bold">Application Fees:</span>{" "}
              {applicationFees}
            </p>
          
          </div>
        </div>
        <div className="row">
            <div  span={24} className="grid grid-cols-4 justify-content-between">
            <p>
              <span className="fw-bold">Language Score: </span>{" "}
              {languageScore}
            </p>
            </div>
        </div>
        <div className="row">
          <div span={24} className="grid grid-cols-4 justify-content-between">
           
            <p>
              <span className="fw-bold">Entry Requirement: </span>{" "}
              {entryRequirement}
            </p>
          
          </div>
        </div>
        <div className="row">
            <div span={24} className="grid grid-cols-4 justify-content-between">
            <p>
              <span className="fw-bold">Subject Url: </span> <a href={subjectUrl} target="_blank">{subjectUrl}</a>
            </p>
            <p>
              <span className="fw-bold">Study Area : </span> {studyArea}
            </p>
            </div>
        </div>

        <div className="row">
          <div span={24} className="grid grid-cols-4 justify-content-between">
            <p>
              <span className="fw-bold">Remarks: </span> {remarks}
            </p>
          </div>
        </div>
        <div className="row">
          <div span={24} className="grid grid-cols-4 justify-content-between">
            <p>
              <span className="fw-bold">Standardized Test: </span>{" "}
              {standardizedTest}
            </p>
            <p>
              <span className="fw-bold">Country: </span>{" "}
              {country}
            </p>
         
           
           
          
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/university/subject/${s.slug}`)}
        >
          Apply Now
        </button>
        <button
          className="btn btn-outline-primary col card-button"
          style={{ borderBottomRightRadius: "5px" }}
          onClick={() => {
            setCart([...cart, s]);
            localStorage.setItem("cart", JSON.stringify([...cart, s]));
            toast.success("Added to Favorite");
          }}
        >
          Add to FAVORITE
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
