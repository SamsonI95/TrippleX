const InputField = ({
  label,
  placeholder,
  name,
  onChange,
  type,
  value,
  error,
  errorText,
  className,
  min,
  max,
  onBlur,
}) => {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="text-[#344054] text-[14px] leading-4 font-semibold mb-2 flex items-center gap-x-2">
        {label}{" "}
        {/* {error ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className="text-[#838385]">*</span>
        )} */}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={`${
          error
            ? "border-red-500"
            : "border border-[#D0D5DD] shadow-xs outline-none"
        } px-3 py-2 rounded-lg w-full bg-[#F7F7F7] border border-[#D0D5DD] shadow-xs outline-none text-[1rem] leading-6 font-normal placeholder:text-[#667085] text-[#667085] relative`}
        min={min}
        max={max}
        name={name}
        value={value}
      ></input>
      {error && (
        <p className="text-red-500 text-[.88rem] leading-4 mt-2 font-light">
          {errorText}
        </p>
      )}
    </div>
  );
};

export default InputField;
