import React from "react";

const Application = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Job Application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <img src="" alt="test" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullname"
            value="Adedayo"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United State</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="NG">Nigeria</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">
            <input type="checkbox" name="" id="terms" /> I agree to the terms
            and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Application;
