import React from "react";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DateRangePicker";

const Home = () => {
  return (
    <div className="w-[80%] max-w-lg bg-blue-500 text-white p-8 rounded-lg shadow-lg absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4.5">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Day Counter App</h3>
        <p className="mb-6">
          Select a date range to calculate the duration between two dates.
        </p>
        <DatePicker />
      </div>
    </div>
  );
};

export default Home;
