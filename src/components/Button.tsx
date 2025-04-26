import React from "react";

function Button({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "rounded-lg border border-transparent py-2 px-5 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-blue-500 focus:outline-4 focus:outline-auto focus:outline-blue-400";
  return <button className={`${base} ${className}`} {...props} />;
}

export default Button;
