import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
export default function ComboBox({ onSelect }) {
  return (
    <Autocomplete
      options={categories}
      getOptionLabel={(option) => option.category}
      onChange={(e, newValue) => {
        onSelect(newValue.category);
      }}
      style={{ width: 220 }}
      renderInput={(params) => (
        <TextField {...params} label="Category" required variant="outlined" />
      )}
    />
  );
}

const categories = [
  { category: "Medicin" },
  { category: "Physics" },
  { category: "Geometry" },
  { category: "Mecanics" },
  { category: "Theology" },
  { category: "Philosophy" },
  { category: "Engineering" },
  { category: "Informatics" },
  { category: "Litterature" },
  { category: "Mathematics" },
  { category: "Fine Art's" },
  { category: "Other" },
];

ComboBox.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
