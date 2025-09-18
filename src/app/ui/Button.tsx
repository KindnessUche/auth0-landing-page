import React from "react";

export default function Button() {
  return (
    <div className="flex gap-4 ">
      <button
        className="min-w-fit cursor-pointer font-semibold
          bg-gradient-to-b from-white to-gray-200 
          text-[#000000c9]
          px-4 py-2 rounded-md 
          shadow-sm 
          hover:from-gray-50 hover:to-gray-300 
          transition-all duration-200
        "
      >
        Sign up
      </button>
      {/* Contact sales button */}
      <button
        className="min-w-fit
          border border-white font-semibold
          text-[#ffffffd5] bg-gradient-to-br from-[#1a1a1a] via-[#f5f5f5]/5 to-[#2a2a2a] 
          px-4 py-2 rounded-md 
          hover:from-[#f5f5f54d] hover:via-[#f5f5f53a] hover:to-[#f5f5f58e]
cursor-pointer
          transition-all duration-200
        "
      >
        Contact sales
      </button>
    </div>
  );
}
