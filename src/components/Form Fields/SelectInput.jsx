import React from "react";

const SelectInput = ({
  label,
  name,
  onChange,
  index,
  value,
  error,
  errorText,
  options,
  className,
  onBlur,
}) => {
  return (
    <>
      <style>
        {`.custom-select {
  padding-right: 2.5rem;
   background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M4 6.5L8 10.5L12 6.5" stroke="%2398A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  -webkit-appearance: none; 
  -moz-appearance: none; 
  appearance: none; 
}

.custom-select.error {
  border-color: #f87171;
}
`}
      </style>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#344054] text-[14px] leading-4 font-semibold mb-2 flex items-center gap-x-2">
          {label}
        </div>
        <select
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          className={`custom-select ${
            error
              ? "border-red-500"
              : "border border-[#D0D5DD] shadow-xs outline-none"
          } px-3 py-2 pr-3 rounded-lg w-full bg-[#F7F7F7] border border-[#D0D5DD] shadow-xs outline-none text-[1rem] leading-6 font-normal text-[#000000] relative ${className}`}
          value={value}
        >
          {options.map((option, index) => (
            <option key={option.id || index} value={option.code}>
              {option.name}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-500 text-[.88rem] leading-4 mt-2 font-light">
            {errorText}
          </p>
        )}
      </div>
    </>
  );
};

export default SelectInput;
