import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DurationDisplay from "./DurationDisplay";
import "react-datepicker/dist/react-datepicker.css";

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex flex-col items-start p-5 gap-4">
      <div className="flex flex-row gap-6">
        {/* Input Tanggal Awal */}
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2 text-gray-700 font-medium">Tanggal Awal</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal awal"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 bg-white"
          />
        </div>

        {/* Input Tanggal Akhir */}
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2 text-gray-700 font-medium">
            Tanggal Akhir
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Pilih tanggal akhir"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-900 bg-white"
          />
        </div>
      </div>

      <div className="mt-4 w-full text-center">
        <DurationDisplay startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
}
