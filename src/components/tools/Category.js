import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
export default function Category({ onSelect, defaultValue }) {
  return (
    <Autocomplete
      defaultValue={defaultValue}
      options={categories}
      onChange={(e, newValue) => {
        onSelect(newValue);
      }}
      style={{ width: 220 }}
      renderInput={(params) => (
        <TextField {...params} label="Category" required variant="outlined" />
      )}
    />
  );
}

const categories = [
  "Medicin",
  "Physics",
  "Geometry",
  "Mecanics",
  "Theology",
  "Philosophy",
  "Engineering",
  "Informatics",
  "Litterature",
  "Mathematics",
  "Fine Arts",
  "Other",
];

Category.propTypes = {
  onSelect: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
};

// Engineering, Fine Art, Informatics, Literature, Mathematics, Mechanics, Medicine, Philosophy, Physics, Other
