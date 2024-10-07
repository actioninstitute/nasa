import React, { useState } from "react";
import { FilterWrapper } from "./stylecomponent/StyledComponents";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const selected = checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((cat) => cat !== value);

    setSelectedCategories(selected);
    onFilterChange({ selectedCategories: selected, startDate, endDate, searchTerm });
  };

  const handleFilterApply = () => {
    onFilterChange({ selectedCategories, startDate, endDate, searchTerm });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onFilterChange({ selectedCategories, startDate, endDate, searchTerm });
  };

  return (
    <>
    <center><h6 style={{fontWeight: 'bold', color: 'red'}}>Space Disaster Map</h6></center>
    <FilterWrapper className="container"
     style={{ backgroundColor: 'lightskyblue', borderRadius: '10px' }}>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="wildfires"
              onChange={handleCategoryChange} />
            <label className="form-check-label"  style={{fontWeight: 'bold'}}>WILDFIRE'S<span style={{ color: 'red', fontSize: "bold" }}>*</span></label>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="earthquakes"
              onChange={handleCategoryChange} />
            <label className="form-check-label"  style={{fontWeight: 'bold'}}>EARTHQUAKE'S<span style={{ color: 'red' }}>*</span></label>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="wildfires"
              onChange={handleCategoryChange} />
            <label className="form-check-label"  style={{fontWeight: 'bold'}}>FLOOD'S <span style={{ color: 'red' }}>*</span></label>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          <div className="form-group">
            <label  style={{fontWeight: 'bold'}}>Start Date: <span style={{ color: 'red', fontSize: "bold" }}>*</span></label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)} />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label  style={{fontWeight: 'bold'}}>End Date: <span style={{ color: 'red', fontSize: "bold" }}>*</span></label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label  style={{fontWeight: 'bold'}}>Search: <span style={{ color: 'red', fontSize: "bold" }}>*</span></label>
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for disaster here" />
          </div>
        </div>
      </div>

      <center>
        <div className="row mt-3">
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleFilterApply}>
              Apply Filters
            </button>
          </div>
        </div>
      </center>
    </FilterWrapper></>
  );
};

export default Filter;
