import React, { useState } from 'react';
import './App.css';

interface BirthData {
  name: string;
  date: string;
  time: string;
  place: string;
}

const AstroChartForm: React.FC = () => {
  const [data, setData] = useState<BirthData>({
    name: "",
    date: "",
    time: "",
    place: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("提交的資料：", data);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">個人星盤查詢</h1>
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
            <input id="name" name="name" value={data.name} onChange={handleChange} placeholder="請輸入姓名" className="input" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">出生日期</label>
            <input id="date" name="date" type="date" value={data.date} onChange={handleChange} className="input" />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">出生時間</label>
            <input id="time" name="time" type="time" value={data.time} onChange={handleChange} className="input" />
          </div>
          <div>
            <label htmlFor="place" className="block text-sm font-medium text-gray-700 mb-1">出生地點</label>
            <input id="place" name="place" value={data.place} onChange={handleChange} placeholder="如：台北" className="input" />
          </div>
          <button className="btn" onClick={handleSubmit}>生成星盤</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <AstroChartForm />
    </div>
  );
};

export default App;
