import axios from "axios";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";

const Search=()=> {
  // hooks
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/subjects/search/${values?.keyword}`);
      console.log(data);
      setValues({ ...values, results: data });
      navigate("/search");   
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="d-flex justify-center" onSubmit={handleSubmit}>
      {/* <input
        type="search"
        style={{ borderRadius: "0px" }}
        className="form-control text-center"
        placeholder="Search courses | Universities"
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        value={values.keyword}
      /> */}
      <div className="form-control items-center">
        <input
          type="search"
          placeholder="Search courses | Universities"
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          value={values.keyword}
          className="input input-bordered w-96" />
      </div>
      <button
        className="btn btn-outline-primary mt-5"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
