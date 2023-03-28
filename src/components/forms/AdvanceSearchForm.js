import React from "react";
// import { Button, Tooltip } from "antd";
// import { Slider } from "antd";
import Select from 'react-select'
import { programLevels } from "../../staticData/programLevel";
import { countries } from "../../staticData/country";
import { studyAreas } from "../../staticData/studyArea";
const AdvanceSearchForm = ({
  values,
  setValues,
  handleAdvanceSearch,
  handleAdvanceSlider,
  handleAdvanceStudyArea,
  handleAdvanceProgramLevel,
  handleAdvanceCountry
}) => {

  return (
    <div className="container pt-3">
      <form onSubmit={handleAdvanceSearch}>
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
            onChange={handleAdvanceStudyArea}
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
              handleAdvanceSlider()
            }}
            // value={values.searchYearlyTuitionFees}
            value="5"
            defaultValue={values.searchYearlyTuitionFees}
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
            onChange={handleAdvanceProgramLevel}
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
            onChange={handleAdvanceCountry}
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

        <button
          onClick={handleAdvanceSearch}
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdvanceSearchForm;
