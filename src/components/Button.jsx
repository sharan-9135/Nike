import React from 'react';

function Button({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-7 px-7 py-4 text-lg border leading-none
          ${backgroundColor ? `${backgroundColor}` : "bg-coral-red"}
          ${textColor ? `${textColor}` : "text-white"}
          ${borderColor ? `${borderColor}` : "border-coral-red"}
          rounded-full ${fullWidth ? "w-full" : ""}`}>
        {label}
        {iconUrl && (
          <img
            src={iconUrl}
            alt="arrow right button"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </div>
  );
}

export default Button;
