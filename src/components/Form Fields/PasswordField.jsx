import { useState } from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

const PasswordField = ({
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
  onFocus,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="text-[#344054] text-[14px] leading-4 font-semibold mb-2 flex items-center gap-x-2">
        {label}
        <div className="relative">
          <HiOutlineInformationCircle
            className="text-[#838385] cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          />
          {showTooltip && (
            <div
              className={`absolute bottom-5 border-none shadow-md p-4 w-[250px] z-10 bg-[#fff] space-y-2`}
            >
              <span className="fon-semibold text-[#667085] text-lg mb-2">
                Password must contain:
              </span>
              <ul className="font-inter text-sm text-[#667085] space-y-2">
                <li>At least one Uppercase letter</li>
                <li>At least one Lowercase letter</li>
                <li>At least one Number</li>
                <li>At least one Special character</li>
                <li>Minimum of 6 characters</li>
              </ul>
            </div>
          )}
        </div>
        {/* {error ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className="text-[#838385]">*</span>
        )} */}
      </div>
      <div
        className={`${
          error
            ? "border-red-500"
            : "border border-[#D0D5DD] shadow-xs outline-none"
        } rounded-lg w-full bg-[#F7F7F7] border border-[#D0D5DD] shadow-xs outline-none  text-[#000000] relative flex justify-between items-center pr-4`}
      >
        <input
          type={isClicked ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          className="border-0 outline-none text-[1rem] leading-6 font-normal bg-transparent px-3 py-2 placeholder:text-[#667085] rounded-lg w-full"
          min={min}
          max={max}
          name={name}
          value={value}
        ></input>
        <div>
          {isClicked ? (
            <HiOutlineEye
              onClick={() => setIsClicked((prev) => !prev)}
              className=" text-[1rem] cursor-pointer duration-200"
            />
          ) : (
            <HiOutlineEyeSlash
              onClick={() => setIsClicked((prev) => !prev)}
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

export default PasswordField;
