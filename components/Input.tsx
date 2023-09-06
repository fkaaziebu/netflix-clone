import React from "react";

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        onChange={onChange}
        className="login-input_field peer"
        placeholder=" "
        id={id}
      />
      <label className="login-input_label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
