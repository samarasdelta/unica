import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
export default function ComboBox({ onSelect, defaultValue }) {
  return (
    <Autocomplete
      defaultValue={defaultValue}
      options={categories}
      onChange={(e, newValue) => {
        onSelect(newValue);
      }}
      fullWidth
      renderInput={(params) => (
        <TextField {...params} label="Template" variant="outlined" />
      )}
    />
  );
}

const categories = ["Math", "Greek", "Formal letter", "Book", "Article"];

ComboBox.propTypes = {
  onSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};
