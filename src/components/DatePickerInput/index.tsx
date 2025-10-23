'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css'; // We'll create this next

interface DatePickerInputProps {
  value?: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  showTimeSelect?: boolean;
  displayFormat?: string;
}

export default function DatePickerInput({
  value,
  onChange,
  placeholder = 'Select date',
  minDate,
  maxDate,
  showTimeSelect = false,
  displayFormat = 'dd/MM/yyyy'
}: DatePickerInputProps) {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      minDate={minDate}
      maxDate={maxDate}
      showTimeSelect={showTimeSelect}
      dateFormat={displayFormat}
      placeholderText={placeholder}
      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
      calendarClassName="custom-calendar dark:custom-calendar-dark"
      popperClassName="z-50"
    />
  );
}
