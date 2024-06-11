import React from "react";

function Input({placeholder}:{placeholder:string}) {
  return (
    <input
      className="bg-primary border-none text-[#a7a1a4] text-center leading-3 px-5 text-[16px] focus-visible:outline-[#a7a1a4] focus-visible:[outline-style:solid] py-2"
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
