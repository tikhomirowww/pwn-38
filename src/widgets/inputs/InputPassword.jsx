import React from "react";
import Input from "./Input";

const InputPassword = ({ onChange, value }) => {
  const className = value.length < 6 ? "invalid" : "";

  return (
    <div className={className}>
      <Input
        data-test={value.length}
        onChange={onChange}
        value={value}
        name="password"
        type="password"
      />
    </div>
  );
};

export default InputPassword;
