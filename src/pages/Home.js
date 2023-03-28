import { useEffect, useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import SubjectViewCard from "../components/cards/SubjectViewCard";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";
import About from "../components/home/About";
import SuccessStories from "../components/home/SuccessStories";

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSubjects();
    getTotal();
  }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/subjects-count");
      setTotal(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadSubjects = async () => {
    try {
      const { data } = await axios.get(`/list-subjects/${page}`);
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };
console.log(subjects)
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/list-universities/${page}`);
      setSubjects([...subjects, ...data]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // const arr = [...subjects];
  // const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));

  return (
    <div>
      {/* <Jumbotron
        title="Explore your study abroad options"
        subTitle="From lookup and admission to visa and arrival at your dream university, we guide you every step of the way."
      /> */}
      <Banner />
      <Services/>
      <div className="px-12 my-24">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center text-3xl mb-8 text-[#001529] font-semibold">
            Pick and Choose your options
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {subjects?.map((s) => (
                <div className="" key={s._id}>
                  <SubjectViewCard s={s} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container text-center p-5">
          {subjects && subjects.length < total && (
            <button
              className="py-2 font-semibold text-[#fff] text-md px-6 bg-[#001529] transition duration-300 ease-in-out"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      </div>

      <About/>
      <SuccessStories/>
    </div>
  );
};

export default Home;
