import { useState, useEffect } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import axios from "axios";
import SubjectViewCard from "../components/cards/SubjectViewCard";
// import {Select,Slider,Tooltip,Button,Modal } from "antd";\
import Select from 'react-select'
import { studyAreas } from "../staticData/studyArea";
import { programLevels } from "../staticData/programLevel";
import { countries } from "../staticData/country";
import AdvanceSearchForm from "../components/forms/AdvanceSearchForm"
// import {UploadOutlined} from "@ant-design/icons";

const SearchProgram = () => {
  const [subjects, setSubjects] = useState([]);
  const [studyArea, setStudyArea] = useState("");
  const [yearlyTuitionFees, setYearlyTuitionFees] = useState([0, 0]);
  const [programLevel, setProgramLevel] = useState("");
  const [country, setCountry] = useState("");
  const [ok, setOk] = useState(false);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState({
    searchStudyArea: "",
    searchCountry: "",
    searchYearlyTuitionFees: [0, 0],
    searchProgramLevel: ""
  })
  // console.log("study area testingggg====>",studyArea);
  // console.log("programLevel testingggg====>",programLevel);
  // console.log("country testingggg====>",country);

  useEffect(() => {
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const { data } = await axios.get("/subjects");
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (studyArea) loadFilteredSubjectsByStudyArea();
  }, [studyArea]);
  useEffect(() => {
    if (programLevel) loadFilteredSubjectsByProgramLevel();
  }, [programLevel]);
  useEffect(() => {
    if (country) loadFilteredSubjectsByCountry();
  }, [country]);

  useEffect(() => {
    console.log("ok to request");
    loadFilteredSubjectsByYearlyTuitionFees();
  }, [ok]);

  const handleSlider = (value) => {
    // reset
    setStudyArea("");
    setYearlyTuitionFees(value);
    setProgramLevel("");
    setCountry("");
    setProgramLevel("");
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  const handleStudyArea = (value) => {
    // reset  
    setYearlyTuitionFees([0, 0]);
    setStudyArea(value);
    setProgramLevel("");
    setCountry("");
    setProgramLevel("");
  };
  const handleProgramLevel = (value) => {
    // reset  
    setYearlyTuitionFees([0, 0]);
    setStudyArea("");
    setProgramLevel("");
    setCountry("");
    setProgramLevel(value);
  };
  const handleCountry = (value) => {
    // reset  
    setYearlyTuitionFees([0, 0]);
    setStudyArea("");
    setProgramLevel("");
    setCountry(value);
    setProgramLevel("");
  };



  const loadFilteredSubjectsByStudyArea = async () => {
    try {
      const { data } = await axios.post("/filtered-subjects", {
        studyArea,

      });
      console.log("filtered subjects => ", data);
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };
  const loadFilteredSubjectsByProgramLevel = async () => {
    try {
      const { data } = await axios.post("/filtered-subjects", {
        programLevel,

      });
      console.log("filtered subjects => ", data);
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };
  const loadFilteredSubjectsByCountry = async () => {
    try {
      const { data } = await axios.post("/filtered-subjects", {
        country
      });
      console.log("filtered subjects => ", data);
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };
  const loadFilteredSubjectsByYearlyTuitionFees = async () => {
    try {
      const { data } = await axios.post("/filtered-subjects", {
        yearlyTuitionFees
      });
      console.log("filtered subjects => ", data);
      setSubjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdvanceSearch = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const { data } = await axios.post(
        `/subject/searchByAllCondition`,
        values
      );
      console.log(data);
      setVisible(false);
      setSubjects(data);
    } catch (err) {
      console.log(err);

    };
  }

  const handleAdvanceSlider = (value) => {
    setValues({ ...values, searchYearlyTuitionFees: value })
  }
  const handleAdvanceStudyArea = (value) => {
    setValues({ ...values, searchStudyArea: value })
  }
  const handleAdvanceProgramLevel = (value) => {
    setValues({ ...values, searchProgramLevel: value })
  }
  const handleAdvanceCountry = (value) => {
    setValues({ ...values, searchCountry: value })
  }


  return (
    <>
      <Jumbotron title="Explore over 80,000+ courses" subTitle="Use our Course Finder to search" />

      <div className="container-fluid px-12">
        <div className="grid" style={{ gridTemplateColumns: `25% 1fr` }}>
          <div className="grid grid-row">
            <div>
              {/* <button
                onClick={() => setVisible(true)}
                // className="col-md-6 offset-md-3 text-center"
                className="col-md-12 mt-3 text-center btn btn-primary"
                // type="primary"
                // shape="round"
                // icon={<UploadOutlined />}
                // size="large"
              >
                Advance Search
              </button>*/}
            </div>
            <div className="row p-1">
              <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                Filter by Study Area
              </h2>
              <Select
                className="mb-3"
                options={(studyAreas || []).map(s => ({
                  value: s.studyArea,
                  label: s.studyArea,
                }))}
                placeholder="Choose Study Area"
                onChange={handleStudyArea}
                // onChange={(option) => {
                //   onChange(option.value)
                //   setProductType(option.value)
                // }}
                // styles={selectCustomStyles}
                isClearable
              />
              {/* <Select
              showSearch             
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Study Area"
              optionFilterProp="children"           
              onChange={handleStudyArea}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }    
     options={(studyAreas || []).map(s => ({
        value: s.studyArea,
        label: s.studyArea,
      }))}
            /> */}

            </div>
            <div className="row p-1">
              {/* <Tooltip title="Tuition Fees range GBP 0 to 30000">  */}
              <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                Filter by Tuition Fees
              </h2>
              <input
                type="range"
                min="0"
                max="3000"
                onChange={() => {
                  handleSlider()
                }}
                defaultValue={yearlyTuitionFees}
                //  onChange={handleSlider}
                // value={yearlyTuitionFees}
                value="5"
                className="range" />
              {/* <Slider
                  className="ms-4 me-4"
                  tipFormatter={(v) => `£${v}`}
                  range
                  value={yearlyTuitionFees}                 
                  onChange={handleSlider}
                  max="30000"
                />
            </Tooltip> */}
            </div>
            <div className="row p-1">
              <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                Filter by Program Level
              </h2>
              <Select
                className="mb-3"
                options={(programLevels || []).map(p => ({
                  value: p.programLevel,
                  label: p.programLevel,
                }))}
                placeholder="Choose Program Level"
                onChange={handleProgramLevel}
                // onChange={(option) => {
                //   onChange(option.value)
                //   setProductType(option.value)
                // }}
                // styles={selectCustomStyles}
                isClearable
              />
              {/* <Select
              showSearch             
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Program Level"
              optionFilterProp="children"           
              onChange={handleProgramLevel}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }    
     options={(programLevels || []).map(p => ({
        value: p.programLevel,
        label: p.programLevel,
      }))}
            /> */}

            </div>
            <div className="row p-1">
              <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
                Filter by Country
              </h2>
              <Select
                className="mb-3"
                options={(countries || []).map(c => ({
                  value: c.country,
                  label: c.country,
                }))}
                placeholder="Choose Country"
                onChange={handleCountry}
                // onChange={(option) => {
                //   onChange(option.value)
                //   setProductType(option.value)
                // }}
                // styles={selectCustomStyles}
                isClearable
              />
              {/* <Select
              showSearch             
              bordered={false}
              size="large"
              className="form-select mb-3"
              placeholder="Choose Country"
              optionFilterProp="children"           
              onChange={handleCountry}            
              filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }    
     options={(countries || []).map(c => ({
        value: c.country,
        label: c.country,
      }))}
            /> */}

            </div>

            <div className="p-5 pt-0">
              <button
                className="btn btn-sm btn-outline-secondary col-12"
                onClick={() => window.location.reload()}
              >
                Reset
              </button>
              <label htmlFor="my-modal-4" className="btn btn-sm btn-outline-secondary ml-2">Advance Search</label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <AdvanceSearchForm
                    values={values}
                    setValues={setValues}
                    handleAdvanceSearch={handleAdvanceSearch}
                    handleAdvanceSlider={handleAdvanceSlider}
                    handleAdvanceStudyArea={handleAdvanceStudyArea}
                    handleAdvanceProgramLevel={handleAdvanceProgramLevel}
                    handleAdvanceCountry={handleAdvanceCountry}
                  />
                </label>
              </label>

            </div>
            <div>
              {/* <Modal
              title="+ Advance Search"
              centered
              visible={visible}
              onCancel={() => setVisible(false)}
              footer={null}
              style={{ top: 50 }}
            > */}
              {/* <AdvanceSearchForm
                values={values}
                setValues={setValues}
                handleAdvanceSearch={handleAdvanceSearch}
                handleAdvanceSlider={handleAdvanceSlider} 
                handleAdvanceStudyArea={handleAdvanceStudyArea}
                handleAdvanceProgramLevel={handleAdvanceProgramLevel}
                handleAdvanceCountry={handleAdvanceCountry}
              /> */}
              {/* </Modal>            */}
              {/* The button to open modal */}

            </div>
          </div>
          <div className="">
            <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center font-bold">
              {subjects?.length} Subjects Found
            </h2>

            <div
              className="row"
              style={{ height: "100vh", overflow: "scroll" }}
            >
              {subjects?.map((s) => (
                <div className="col-md-4" key={s._id}>
                  <SubjectViewCard s={s} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default SearchProgram;



