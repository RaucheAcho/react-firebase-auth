import React from "react";

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="flex flex-col">
    {label ? (
      <label className={label.length ? "w-auto" : ""}>{label}</label>
    ) : null}
    <input
      className="p-2 mb-2 border border-orange"
      onChange={handleChange}
      {...props}
    />
  </div>
);

export default FormInput;
