import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex gap-6 p-5">
      <div className="flex flex-col w-full max-w-xs">
        <label className="mb-2 text-gray-700 font-medium">Tanggal Awal</label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          dateFormat="yyyy-MM-dd"
        />
      </div>
      
      <div className="flex flex-col w-full max-w-xs">
        <label className="mb-2 text-gray-700 font-medium">Tanggal Akhir</label>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          dateFormat="yyyy-MM-dd"
        />
      </div>
    </div>
  );
}