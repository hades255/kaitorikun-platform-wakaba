import { forwardRef, useState, useEffect, useRef } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default forwardRef(function TextInput({ value, onChange, className = '', ...props }, ref) {
  const input = ref ? ref : useRef();
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [minute, setMinute] = useState("")
  const [fullDate, setFullDate] = useState(value || "")

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 101 }, (_, i) => currentYear - i)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const dates = Array.from({ length: new Date(year, month, 0).getDate() || 31 }, (_, i) => i + 1)
  const hours = Array.from({ length: 25 }, (_, i) => i)
  const minutes = Array.from({ length: 61 }, (_, i) => i)

  useEffect(() => {
    if (value) {
      let date = new Date(value);
      setYear(date.getFullYear())
      setMonth(date.getMonth())
      setDate(date.getDate())
      setHour(date.getHours())
      setDate(date.getMinutes())
    }
  }, [value]);

  useEffect(() => {
    if (year && month && date && hour && minute) {
      const formatted = `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')} ${hour}:${minute}`;
      setFullDate(formatted);
      if (onChange) {
        onChange(formatted);
      }
    }
  }, [year, month, date, hour, minute]);

  return (
    <div className="date-input space-x-5" ref={ref}>
      {/* Year Select */}
      <Select
        value={year}
        onChange={(e) => setYear(e.target.value)}
        displayEmpty
        size="small"
        className="shop-select w-90"
      >
        <MenuItem disabled value="">
          <span className="text-gray-500">年</span>
        </MenuItem>
        {years.map((y, k) => (
          <MenuItem key={k} value={y}>{y}</MenuItem>
        ))}
      </Select>
      {/* Month Select */}
      <Select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        displayEmpty
        size="small"
        className="shop-select w-70 m-l-5"
      >
        <MenuItem disabled value="">
          <span className="text-gray-500">月</span>
        </MenuItem>
        {months.map((m, k) => (
          <MenuItem key={k} value={m}>{m}</MenuItem>
        ))}
      </Select>
      {/* Date Select */}
      <Select
        value={date}
        onChange={(e) => setDate(e.target.value)}
        displayEmpty
        size="small"
        className="shop-select w-70 m-l-5"
      >
        <MenuItem disabled value="">
          <span className="text-gray-500">日</span>
        </MenuItem>
        {dates.map((d, k) => (
          <MenuItem key={k} value={d}>{d}</MenuItem>
        ))}
      </Select>
      <Select
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        displayEmpty
        size="small"
        className="shop-select w-70 m-l-5"
      >
        <MenuItem disabled value="">
          <span className="text-gray-500">時</span>
        </MenuItem>
        {hours.map((d, k) => (
          <MenuItem key={k} value={d}>{d}</MenuItem>
        ))}
      </Select>
      <Select
        value={minute}
        onChange={(e) => setMinute(e.target.value)}
        displayEmpty
        size="small"
        className="shop-select w-70 m-l-5"
      >
        <MenuItem disabled value="">
          <span className="text-gray-500">分</span>
        </MenuItem>
        {minutes.map((d, k) => (
          <MenuItem key={k} value={d}>{d}</MenuItem>
        ))}
      </Select>

    </div>
  );
});
