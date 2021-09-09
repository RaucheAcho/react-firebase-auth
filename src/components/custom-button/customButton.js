import React from "react";

const CustomButton = ({ children, className, ...otherProps }) => (
  <button className={className} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
