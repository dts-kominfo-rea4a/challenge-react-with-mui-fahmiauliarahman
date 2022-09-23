import { TextField } from "@mui/material";
import React from "react";

const TextInput = (props) => {
  const { id, name, label, onChange } = props;
  return (
    <>
      <TextField
        fullWidth
        id={id}
        label={label}
        variant="filled"
        sx={{ margin: "5px 0px" }}
        name={name}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
