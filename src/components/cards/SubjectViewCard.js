// import { Badge } from "antd";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
// import { Tooltip } from 'antd';
const SubjectViewCard = ({ s }) => {
  // context
  const [cart, setCart] = useCart();
  // hooks
  const navigate = useNavigate();

  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={s?.photo} alt="Movie" /></figure>
        <div className="card-body">
          <h2 className="card-title">{s?.title}</h2>
          <span className="flex items-center"><h2 className="card-title">{s?.university}</h2> <span className="font-bold text-md text-[#001529] ml-2">{s?.ranking}</span></span>
          <p>{s?.description?.substring(0, 60)}...</p>
         <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/subject/${s.slug}`)}
              className="py-[6px] font-semibold hover:text-[#fff] border-[2px] border-[#001529] text-md px-4 hover:bg-[#001529] transition duration-300">View Details</button>
            <button
              onClick={() => {
                setCart([...cart, s]);
                localStorage.setItem("cart", JSON.stringify([...cart, s]));
                toast.success("Added to Favorite");
              }}
              className="py-2 font-semibold hover:text-[#fff] bg-blue-200 text-md px-4 hover:bg-[#001529] transition duration-300">Add to Short List</button>
          </div>
        </div>
      </div>
      {/* <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={`${process.env.REACT_APP_API}/subject/photo/${s._id}`} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{s?.title}</h2>
          <h2 className="card-title">{s?.university}</h2>
          <p></p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/subject/${s.slug}`)}
              className="btn btn-xs btn-primary">View Details</button>
            <button
              onClick={() => {
                setCart([...cart, s]);
                localStorage.setItem("cart", JSON.stringify([...cart, s]));
                toast.success("Added to Favorite");
              }}
              className="btn btn-xs btn-primary">Add to Short List</button>
          </div>
        </div>
      </div> */}
      </>
    // <div className="card mb-3 hoverable">
    //   <h2>Ranking: {s?.ranking}</h2>
    //  {/* <Tooltip placement="topLeft" title={`Ranking: ${s?.ranking}`}> */}
    //   {/* <Badge.Ribbon text={`Yearly Tuition Fees:
    //    ${s?.yearlyTuitionFees?.toLocaleString(
    //     "en-US", {
    //         style: "currency",
    //         currency: "GBP",
    //         currencyDisplay:"code",
    //         minimumFractionDigits: 0,
    //         maximumFractionDigits: 0,
    //       }
    //    )}`} 
    //    color="red">

    //     <Badge.Ribbon         
    //       text={`${
    //        s.ranking.substring(0,50)
    //       }`}
    //       placement="start"
    //       color="green"
    //     >


    //      */}
    //       <img
    //         className="card-img-top"
    //         src={`${process.env.REACT_APP_API}/subject/photo/${s._id}`}
    //         alt={s.title}
    //         style={{ height: "300px", objectFit: "cover" }}
    //       />


    //     {/* </Badge.Ribbon>

    //   </Badge.Ribbon> */}

    //   <div className="card-body">
    //     <h5>{s?.title}</h5>
    //     <h4 className="">{s?.university}</h4>
    //     <p className="card-text">{s?.description?.substring(0, 60)}...</p>
    //   </div>

    //   <div className="d-flex justify-content-between">
    //     <button
    //       className="btn btn-primary col card-button"
    //       style={{ borderBottomLeftRadius: "5px" }}
    //       onClick={() => navigate(`/subject/${s.slug}`)}
    //     >
    //       View Details
    //     </button>

    //     <button
    //       className="btn btn-outline-primary col card-button"
    //       style={{ borderBottomRightRadius: "5px" }}
    //       onClick={() => {
    //         setCart([...cart, s]);
    //         localStorage.setItem("cart", JSON.stringify([...cart, s]));
    //         toast.success("Added to Favorite");
    //       }}
    //     >
    //      Add to Short List
    //     </button>
    //   </div>
    //   {/* </Tooltip> */}
    // </div>
  );
}

export default SubjectViewCard;
