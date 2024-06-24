import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const ConfirmPasswordField = ({
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
  const [isClicked2, setIsClicked2] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="text-[#344054] text-[14px] leading-4 font-semibold mb-2 flex items-center gap-x-2">
        {label}
        {/* {error ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className="text-[#838385]">*</span>
        )} */}
      </div>
      <div
        className={`${
          error ? "border-red-500" : "border border-[#D0D5DD] shadow-xs outline-none"
        } rounded-lg w-full bg-[#F7F7F7] border border-[#D0D5DD] shadow-xs outline-none text-[#000000] relative flex justify-between items-center pr-4`}
      >
        <input
          type={isClicked2 ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className="border-0 outline-none text-[1rem] leading-6 font-normal bg-transparent px-3 py-2 placeholder:text-[#667085] rounded-lg"
          min={min}
          max={max}
          name={name}
          value={value}
        ></input>
        <div>
          {isClicked2 ? (
            <HiOutlineEye
              onClick={() => setIsClicked2((prev) => !prev)}
              className=" text-[1rem] cursor-pointer duration-200"
            />
          ) : (
            <HiOutlineEyeSlash
              onClick={() => setIsClicked2((prev) => !prev)}
              className=" text-[1rem] cursor-pointer duration-200"
            />
          )}
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-[.88rem] leading-4 mt-1 font-light">
          {errorText}
        </p>
      )}
    </div>
  );
};

export default ConfirmPasswordField;
