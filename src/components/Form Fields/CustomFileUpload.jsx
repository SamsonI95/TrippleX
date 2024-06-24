import React, { useRef } from "react";

const CustomFileUpload = ({ onFileChange, label }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      onFileChange(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="text-[#344054] text-[14px] leading-4 font-semibold mb-2 flex  gap-x-2">
        {label}
      </div>
      <div
        className="border-2 border-[#EAECF0] rounded-lg p-6 w-[403px] h-[104px] text-center cursor-pointer flex flex-col items-center justify-center"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          <img src="/uploadicon.svg" alt="upload icon" />
        </div>
        <div className="flex items-center justify-center space-x-1">
          <p className="text-[#3538CD] font-semibold">Click to upload</p>
          <p className="text-tx-tertiary"> or drag and drop</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </>
  );
};

export default CustomFileUpload;
