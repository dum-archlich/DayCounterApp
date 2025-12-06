import React, { useState } from 'react';

export default function DatePicker() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="flex gap-6 p-5">
      <div className="flex flex-col w-full max-w-xs">
        <label className="mb-2 text-gray-700 font-medium">Tanggal Awal</label>
        <input 
          type="date" 
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col w-full max-w-xs">
        <label className="mb-2 text-gray-700 font-medium">Tanggal Akhir</label>
        <input 
          type="date" 
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
}