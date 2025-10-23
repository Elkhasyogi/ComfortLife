'use client';

import Select from 'react-select';

interface SelectOptionsProps {
  name: string;
  options: OptionType[];
  placeholder?: string;
  isSearchable?: boolean;
  value?: OptionType | null;
  onChange?: (option: OptionType | null) => void;
}

export default function SelectOptions({
  name,
  options,
  placeholder = 'Select an option...',
  isSearchable = true,
  value,
  onChange,
}: SelectOptionsProps) {
  return (
    <Select
      name={name}
      options={options}
      isSearchable={isSearchable}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      classNames={{
        control: ({ isFocused }) =>
          `w-full !rounded-md border !shadow-none !border-stroke bg-transparent px-2 py-2 text-base text-dark outline-none transition placeholder:text-dark-6 
          focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary 
          ${isFocused ? '!border-primary' : 'border'}`,

        menu: () =>
          'mt-1 bg-white border border-gray-200 dark:border-dark-3 dark:bg-dark-2 shadow-md rounded-md z-50',

        option: ({ isFocused, isSelected }) =>
          `px-3 py-2 cursor-pointer text-dark dark:text-white 
          ${isFocused ? 'bg-primary/10' : ''} 
          ${isSelected ? 'bg-primary text-white' : ''}`,

        singleValue: () => 'text-dark dark:text-white',
        placeholder: () => 'text-dark-6 dark:text-dark-5',
      }}
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }),
        indicatorSeparator: () => ({ display: 'none' }), // remove separator line
      }}
    />
  );
}